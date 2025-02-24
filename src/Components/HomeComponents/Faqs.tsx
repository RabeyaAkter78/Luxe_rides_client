import React from 'react';
import { Collapse } from 'antd';
import SectionTitle from '../../Shared/SectionTitle';

const { Panel } = Collapse;

const Faqs = () => {
    const faqs = [
        { question: "What types of cars do you offer?", answer: "We offer a wide range of cars including sedans, SUVs, trucks, and electric vehicles." },
        { question: "How can I book a test drive?", answer: "You can book a test drive through our website or by contacting our sales team." },
        { question: "Do you offer financing options?", answer: "Yes, we have financing plans available for all types of buyers. Please contact us for more details." },
        { question: "What warranties do you offer on cars?", answer: "We offer a 5-year warranty on most of our new cars and 1-year warranties on used cars." },
        { question: "How can I get in touch with customer support?", answer: "You can reach customer support via email or phone. Visit our 'Contact Us' page for more details." },
    ];

    return (
        <div className="">
            <div className="container mx-auto py-10 px-6">
            <SectionTitle title="Frequently Asked Questions"></SectionTitle>
                <Collapse accordion>
                    {faqs.map((faq, index) => (
                        <Panel header={faq.question} key={index} className="text-white">
                            <p className="text-gray-700">{faq.answer}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default Faqs;
