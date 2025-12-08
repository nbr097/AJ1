import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export const TermsPage = () => {
    return (
        <div className="min-h-screen bg-brand-white py-24 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-2xl mb-6">
                        <FileText className="w-8 h-8 text-brand-red" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4">Terms & Conditions</h1>
                    <p className="text-xl text-gray-600">Please read our terms of service carefully.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 space-y-12"
                >
                    <section>
                        <h2 className="text-2xl font-bold text-brand-dark border-b-2 border-brand-yellow/20 pb-4 mb-6">General Terms & Conditions</h2>
                        <ol className="list-decimal list-outside pl-5 space-y-4 text-gray-600 leading-relaxed">
                            <li>We are not common carriers and reserve the right to refuse to Quote or carry any goods for any person or any class of goods at our discretion.</li>
                            <li>Customer must be present at loading and unloading or ensure that someone is there on their behalf.</li>
                            <li>Customer must check all furniture and belongings upon delivery and notify Removalists and office immediately of any damages occurred.</li>
                            <li>It is the customers responsibility to ensure that all goods are taken and nothing is left behind or moved in error.</li>
                            <li>It is the customers responsibility to make sure that all goods are packed, boxed, furniture cabinets draws Ect emptied, dismantled and ready for safe transport.</li>
                            <li>
                                We will not be Liable for:
                                <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
                                    <li>Any loss or damage or delay which results from any cause beyond our control.</li>
                                    <li>Loss or Damage resulting from inadequate or improper packing or unpacking, unless the goods were both packed and unpacked by us.</li>
                                    <li>Loss or damage to electrical items including TV's and Fusion on electrical goods while in transit, these things will not be covered by insurance.</li>
                                </ul>
                            </li>
                            <li>Due to OH&S issues, we expect your items to be of a standard of cleanliness and have the right to refuse items considered by our movers to be dirty. We will not move boxes that are not strong enough to carry the items placed in them. If our removalist believe there is a safety risk with the work being requested we have the right to refuse to undertake that work and no insurance will be included. No furniture will be taken down any more than 3 flights of stairs (3 levels). Under no circumstances is furniture to be passed over balconies.</li>
                            <li>Our price quoted in the booking confirmation are per our rates and a charged in 15 minute increments and include GST. Our on-site time starts from the minute the truck arrives to the nearest 15 minutes on the completion of the job. Or when the job has been paid in full which ever is sooner. A callout fee may be included in your first two hours of charge time, or maybe carried as a separate charge. All moves have a two hour minimum.</li>
                            <li>We Provide a quote/estimate for a Number of trucks and removalists which is based on the information you have provided by phone or email to us in relation to your property and contents. This is not a guarantee the work will be completed within a certain time frame or that additional resources and equipment may be required on the day, if you're removalist believe it is necessary to complete the job.</li>
                            <li>
                                Please Notify us if you have any of the following, pianos, organs, spa baths, pool tables, double door commercial refrigerators or heavy marble, glass or timber tables as these Will incur extra charges.
                                <ul className="list-disc list-outside pl-5 mt-2 space-y-1">
                                    <li>We reserve the right not to move any of the below items large pots, animal enclosures, fish tanks etc. Items heavier than 80 kg and longer than 3 m in length sensitive or delicate items that are not packed correctly.</li>
                                </ul>
                            </li>
                            <li>The tax invoice must be signed by the customer on the completion of the job and payment made in full. 2% card charge applies to all cards. Cheques not accepted.</li>
                            <li>
                                <strong>Cancellation policy:</strong> Local moves or interstate moves cancelled, rescheduled or placed on hold by you, we must be given at least 96 hours notice prior to our arrival or a cancellation fee of $150 applies. Or upfront deposits paid will be lost.
                            </li>
                            <li>
                                <strong>Deposits:</strong> A deposit of up to 25% will be charged on interstate moves this will be explained at time of booking and confirmation.
                            </li>
                            <li>
                                <strong>Vehicle Sizes:</strong> As we have vehicles of various sizes we endeavour to quote the right size truck for your job, however this is only based on information we are provided by you over the phone or when you completed our online inquiry form we will not be liable if the truck provided is too small for a single move and multiple moves are required.
                            </li>
                            <li>
                                <strong>Insurance:</strong> A J Smart Move PTY Ltd has a goods in transit insurance policy (100K) as well as $20 million public liability. While we will take all the necessary care to ensure that your goods arrive safely there may be circumstances where we are not responsible for any loss or damage to any goods during the move. AJ Smart Move will pay up to $50 for marks scuffs scratches and dents caused by accident. If Our removalist deem the item too big for the staircase or too bulky for the doorway or lift, we can refuse to undertake that particular task and no insurance will be included. If instructed to do so all liability remains with the customer.
                            </li>
                            <li>
                                <strong>Surcharge:</strong> Surcharges may apply for bad access (50M Carry) or for multiple levels. A third man may also need to be brought in at the customers expense.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-brand-dark border-b-2 border-brand-yellow/20 pb-4 mb-6">Storage Terms</h2>
                        <ol className="list-decimal list-outside pl-5 space-y-4 text-gray-600 leading-relaxed">
                            <li>The amount quoted for storage is upfront and written on the contract signed and dated by the customer.</li>
                            <li>The Storer is responsible to pay in advance for storage making the payment directly to AJ Smart move, on time and in full throughout the full period of storage.</li>
                            <li>The late payment fee of $50 can be charged for payments which fall over 30 days due. These charges can be re-occurring.</li>
                            <li>We abide by the self storage act of Queensland.</li>
                            <li>Goods which which cannot be stored are petrol, gas, chemicals, food, and any hazardous perishable items.</li>
                            <li>We require seven days notice for termination and re-delivery as in accordance with your contract, however sometimes we may be able to deliver back sooner than this.</li>
                            <li>All goods are not covered by any form of insurance while in storage.</li>
                            <li>Under some circumstances a cleaning fee of $55 maybe added to the final move out bill as decided by us based on the cleanliness of products stored.</li>
                        </ol>
                    </section>

                    <section className="space-y-8 pt-8 border-t border-gray-100">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-dark border-b border-gray-100 pb-2">Settlement Jobs</h2>
                            <p className="text-gray-600 leading-relaxed">
                                All settlement jobs where the start time is later than 7 am will have an 8 hour minimum (Day Rate). This includes travel to and from the job and is charged even if the 8 hours are not used.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-dark border-b border-gray-100 pb-2">School Holidays and Public Holidays</h2>
                            <p className="text-gray-600 leading-relaxed">
                                All public holidays and days that shoulder public holidays and long weekends may incur an increased hourly rate and travel charge to cover costs.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-dark border-b border-gray-100 pb-2">After Hours</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Any work completed after 6 pm will incur a penalty rate.
                            </p>
                        </section>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};
