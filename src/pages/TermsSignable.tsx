
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { TERMS_AND_CONDITIONS, SETTLEMENT_TERMS, HOLIDAY_TERMS, AFTER_HOURS_TERMS } from '../data/terms';
import '../index.css'; // Ensure styles are available

export const TermsSignablePage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const sigCanvas = useRef<SignatureCanvas>(null);

    const clearSignature = () => {
        sigCanvas.current?.clear();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email) {
            setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
            return;
        }

        if (sigCanvas.current?.isEmpty()) {
            setSubmitStatus({ type: 'error', message: 'Please sign the terms and conditions.' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const signatureData = sigCanvas.current?.getCanvas().toDataURL('image/png');

            const response = await fetch('/api/sign-terms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    signature: signatureData,
                    timestamp: new Date().toISOString(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit signed terms.');
            }

            setSubmitStatus({ type: 'success', message: 'Terms signed and sent successfully! Check your email for a copy.' });
            setName('');
            setEmail('');
            sigCanvas.current?.clear();

        } catch (error: any) {
            console.error('Error submitting terms:', error);
            setSubmitStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms & Conditions</h1>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
                {TERMS_AND_CONDITIONS.map((section, idx) => (
                    <div key={idx} className="mb-6">
                        <h2 className="text-xl font-semibold mb-3 text-red-600">{section.title}</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="text-gray-700">
                                    {typeof item === 'string' ? (
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    ) : (
                                        <div>
                                            <span dangerouslySetInnerHTML={{ __html: item.text }} />
                                            {item.subItems && (
                                                <ul className="list-circle pl-5 mt-2 space-y-1">
                                                    {item.subItems.map((subItem, subIdx) => (
                                                        <li key={subIdx}>{subItem}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-lg mb-2">{SETTLEMENT_TERMS.title}</h3>
                    <p className="text-gray-700 mb-4">{SETTLEMENT_TERMS.content}</p>

                    <h3 className="font-semibold text-lg mb-2">{HOLIDAY_TERMS.title}</h3>
                    <p className="text-gray-700 mb-4">{HOLIDAY_TERMS.content}</p>

                    <h3 className="font-semibold text-lg mb-2">{AFTER_HOURS_TERMS.title}</h3>
                    <p className="text-gray-700">{AFTER_HOURS_TERMS.content}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Acknowledge & Sign</h2>

                {submitStatus && (
                    <div className={`mb-4 p-4 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {submitStatus.message}
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Digital Signature</label>
                    <div className="border border-gray-300 rounded bg-gray-50 h-40 w-full relative">
                        <SignatureCanvas
                            ref={sigCanvas}
                            canvasProps={{
                                className: 'signature-canvas w-full h-full',
                            }}
                            backgroundColor="rgba(255,255,255,0)"
                        />
                        <button
                            type="button"
                            onClick={clearSignature}
                            className="absolute top-2 right-2 text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-gray-600 transition-colors"
                        >
                            Clear
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Please sign in the box above using your mouse or finger.</p>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded text-white font-bold transition-colors ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700'
                        }`}
                >
                    {isSubmitting ? 'Sending...' : 'I Agree & Sign Terms'}
                </button>
            </form>
        </div>
    );
};
