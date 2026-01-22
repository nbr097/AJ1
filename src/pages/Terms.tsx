import React from 'react';
import { TERMS_AND_CONDITIONS, SETTLEMENT_TERMS, HOLIDAY_TERMS, AFTER_HOURS_TERMS } from '../data/terms';
import '../index.css'; // Ensure styles are available

export const TermsPage = () => {

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
        </div>
    );
};
