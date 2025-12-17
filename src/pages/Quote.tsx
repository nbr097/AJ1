import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Home, Building, Briefcase, ArrowRight, ArrowLeft, MapPin, Check, Truck, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
// import emailjs from '@emailjs/browser'; // Removed in favor of Resend
import { usePostcode, type PostcodeEntry } from '../hooks/usePostcode';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { TermsModal } from '../components/TermsModal';

type FormData = {
    moveType: 'house' | 'apartment' | 'office';
    pickup: string;
    dropoff: string;
    date: string;
    inventory: Record<string, number>;
    name: string;
    email: string;
    phone: string;
};

const steps = [
    { id: 'type', title: 'What are you moving?' },
    { id: 'details', title: 'Where and When?' },
    { id: 'inventory', title: 'What items?' },
    { id: 'contact', title: 'Contact Details' },
];

const LocationAutocomplete = ({
    label,
    value,
    onChange,
    error,
    icon: Icon
}: {
    label: string;
    value: string;
    onChange: (val: string) => void;
    error?: string;
    icon: any;
}) => {
    const [query, setQuery] = useState(value || '');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const { search } = usePostcode();
    const suggestions = search(query);

    // Update query when value changes externally (e.g. form reset)
    useEffect(() => {
        setQuery(value || '');
    }, [value]);

    const handleSelect = (item: PostcodeEntry) => {
        const formatted = `${item.l}, ${item.s} ${item.p}`;
        setQuery(formatted);
        onChange(formatted);
        setShowSuggestions(false);
    };

    return (
        <div className="space-y-2 relative">
            <label className="font-bold text-gray-700">{label} <span className="text-red-500">*</span></label>
            <div className="relative">
                <Icon className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                <input
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        onChange(e.target.value);
                        setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
                    placeholder="Suburb or Postcode"
                    className={cn(
                        "w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all",
                        error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                    )}
                    autoComplete="off"
                />
                {showSuggestions && query.length >= 3 && suggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {suggestions.map((item) => (
                            <button
                                key={`${item.p}-${item.l}`}
                                type="button"
                                onClick={() => handleSelect(item)}
                                className="w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors border-b border-gray-50 last:border-0"
                            >
                                <span className="font-bold text-brand-dark">{item.l}</span>
                                <span className="text-gray-500 text-sm ml-2">{item.s} {item.p}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

const QuotePageContent = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitError, setSubmitError] = useState<string | null>(null);

    const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            moveType: 'house',
            inventory: {},
            pickup: '',
            dropoff: '',
            date: '',
            name: '',
            email: '',
            phone: ''
        }
    });

    const moveType = watch('moveType');
    const inventory = watch('inventory');
    const pickup = watch('pickup');
    const dropoff = watch('dropoff');

    const validateStep = async () => {
        let isValid = false;

        switch (currentStep) {
            case 0: // Type
                isValid = await trigger('moveType');
                break;
            case 1: // Details
                isValid = await trigger(['pickup', 'dropoff', 'date']);
                break;
            case 2: // Inventory
                const hasItems = Object.values(inventory || {}).some(qty => qty > 0);
                if (!hasItems) {
                    alert('Please select at least one item to move.');
                    return false;
                }
                isValid = true;
                break;
            case 3: // Contact
                isValid = await trigger(['name', 'email', 'phone']);
                break;
            default:
                isValid = true;
        }

        return isValid;
    };

    const nextStep = async () => {
        const isValid = await validateStep();
        if (isValid) {
            setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
        }
    };

    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

    const [showTerms, setShowTerms] = useState(false);
    const [pendingData, setPendingData] = useState<FormData | null>(null);

    const onSubmit = async (data: FormData) => {
        setPendingData(data);
        setShowTerms(true);
    };

    const handleTermsAgreed = async () => {
        setShowTerms(false);
        if (!pendingData) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Format inventory for email
            const inventoryList = Object.entries(pendingData.inventory)
                .filter(([_, qty]) => qty > 0)
                .map(([item, qty]) => `- ${item}: ${qty}`)
                .join('\n');

            const response = await fetch('/api/send-quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...pendingData,
                    inventory: inventoryList || 'No items selected',
                }),
            });

            if (response.status === 404) {
                throw new Error('Backend function not found. Are you running "npm run dev:cloud"?');
            }

            if (!response.ok) {
                throw new Error('Failed to send quote');
            }

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid response from server");
            }

            await response.json();

            setSubmitStatus('success');
        } catch (error: any) {
            console.error('Email error:', error);
            setSubmitStatus('error');
            setSubmitError(error.message);
        } finally {
            setIsSubmitting(false);
            setPendingData(null);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-6 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-lg"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-black text-brand-dark mb-4">Quote Request Sent!</h2>
                    <p className="text-gray-600 mb-8">
                        Thanks for reaching out. We've received your details and will get back to you with a quote shortly.
                    </p>
                    <a href="/" className="inline-flex items-center justify-center px-8 py-3 bg-brand-red text-white font-bold rounded-full hover:bg-red-600 transition-colors">
                        Back to Home
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {steps.map((step, index) => (
                            <div key={step.id} className={cn("text-sm font-bold transition-colors", index <= currentStep ? "text-brand-red" : "text-gray-300")}>
                                {step.title}
                            </div>
                        ))}
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-brand-red"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AnimatePresence mode="wait">
                            {currentStep === 0 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-3xl font-black text-brand-dark mb-8">Let's get started.</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {[
                                            { id: 'house', icon: Home, label: 'House' },
                                            { id: 'apartment', icon: Building, label: 'Apartment' },
                                            { id: 'office', icon: Briefcase, label: 'Office' },
                                        ].map((type) => (
                                            <button
                                                key={type.id}
                                                type="button"
                                                onClick={() => setValue('moveType', type.id as any)}
                                                className={cn(
                                                    "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all",
                                                    moveType === type.id
                                                        ? "border-brand-red bg-brand-red/5 text-brand-red shadow-lg scale-105"
                                                        : "border-gray-100 hover:border-brand-yellow hover:bg-brand-yellow/5 text-gray-500"
                                                )}
                                            >
                                                <type.icon className="w-10 h-10 mb-3" />
                                                <span className="font-bold text-lg">{type.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 1 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-3xl font-black text-brand-dark mb-8">Where are we going?</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <LocationAutocomplete
                                            label="Pickup Location"
                                            value={pickup}
                                            onChange={(val) => {
                                                setValue('pickup', val);
                                                trigger('pickup');
                                            }}
                                            error={errors.pickup?.message}
                                            icon={MapPin}
                                        />
                                        {/* Hidden input for validation registration */}
                                        <input type="hidden" {...register('pickup', { required: "Pickup location is required" })} />

                                        <LocationAutocomplete
                                            label="Dropoff Location"
                                            value={dropoff}
                                            onChange={(val) => {
                                                setValue('dropoff', val);
                                                trigger('dropoff');
                                            }}
                                            error={errors.dropoff?.message}
                                            icon={Truck}
                                        />
                                        {/* Hidden input for validation registration */}
                                        <input type="hidden" {...register('dropoff', { required: "Dropoff location is required" })} />

                                        <div className="space-y-2 md:col-span-2">
                                            <label className="font-bold text-gray-700">Preferred Date <span className="text-red-500">*</span></label>
                                            <input
                                                type="date"
                                                {...register('date', { required: "Date is required" })}
                                                className={cn(
                                                    "w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all",
                                                    errors.date ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                                                )}
                                            />
                                            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-3xl font-black text-brand-dark mb-8">What are we moving?</h2>
                                    <p className="text-gray-500 mb-4">Select the main items</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'Bed', 'Sofa', 'Fridge', 'Washing Machine', 'Dining Table', 'Wardrobe', 'Dryer',
                                            'TV', 'TV Unit', 'Dresser', 'Shelving', 'Pool Table', 'Piano',
                                            'Buffet', 'Bookcase', 'Entertainment Unit', 'Outdoor Setting', 'Boxes (10+)'
                                        ].map((item) => {
                                            const quantity = (inventory as Record<string, number>)?.[item] || 0;
                                            return (
                                                <div
                                                    key={item}
                                                    className={cn(
                                                        "flex items-center justify-between p-4 rounded-lg border transition-all",
                                                        quantity > 0
                                                            ? "border-brand-red bg-brand-red/5 shadow-sm"
                                                            : "border-gray-100 hover:bg-gray-50"
                                                    )}
                                                >
                                                    <span className={cn("font-medium", quantity > 0 ? "text-brand-dark" : "text-gray-600")}>
                                                        {item}
                                                    </span>
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const current = (inventory as Record<string, number>)?.[item] || 0;
                                                                if (current > 0) {
                                                                    setValue('inventory', { ...inventory as Record<string, number>, [item]: current - 1 });
                                                                }
                                                            }}
                                                            className={cn(
                                                                "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                                                quantity > 0 ? "bg-white text-brand-red border border-brand-red hover:bg-brand-red hover:text-white" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                            )}
                                                            disabled={quantity === 0}
                                                        >
                                                            -
                                                        </button>
                                                        <span className={cn("w-6 text-center font-bold", quantity > 0 ? "text-brand-red" : "text-gray-300")}>
                                                            {quantity}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const current = (inventory as Record<string, number>)?.[item] || 0;
                                                                setValue('inventory', { ...inventory as Record<string, number>, [item]: current + 1 });
                                                            }}
                                                            className="w-8 h-8 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center hover:bg-yellow-400 transition-colors font-bold"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-3xl font-black text-brand-dark mb-8">Almost done!</h2>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                                            <input
                                                {...register('name', { required: "Name is required" })}
                                                className={cn(
                                                    "w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all",
                                                    errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                                                )}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                            <input
                                                type="email"
                                                {...register('email', {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                className={cn(
                                                    "w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all",
                                                    errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                                                )}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-bold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                            <input
                                                type="tel"
                                                {...register('phone', { required: "Phone number is required" })}
                                                className={cn(
                                                    "w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all",
                                                    errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-brand-red focus:ring-brand-red/20"
                                                )}
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                        </div>
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                                            <AlertCircle className="w-5 h-5" />
                                            <span>{submitError || "Something went wrong. Please try again or call us directly."}</span>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex justify-between mt-12 pt-8 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={currentStep === 0 || isSubmitting}
                                className={cn("flex items-center gap-2 font-bold text-gray-500 hover:text-brand-dark transition-colors", currentStep === 0 && "opacity-0 pointer-events-none")}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back
                            </button>

                            {currentStep < steps.length - 1 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex items-center gap-2 px-8 py-3 bg-brand-yellow hover:bg-yellow-400 text-brand-dark font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Next Step
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center gap-2 px-8 py-3 bg-brand-red hover:bg-red-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Get My Quote
                                            <Check className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
                <TermsModal
                    isOpen={showTerms}
                    onClose={() => setShowTerms(false)}
                    onAgree={handleTermsAgreed}
                />
            </div>
        </div >
    );
};

export const QuotePage = () => {
    return (
        <ErrorBoundary>
            <QuotePageContent />
        </ErrorBoundary>
    );
};
