'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Container from './Container';
import Image from 'next/image';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: 'How does it work ?',
        answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id: 2,
        question: 'Do I need a designer to use Doctris ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo urna id purus bibendum, non volutpat dui vestibulum.'
    },
    {
        id: 3,
        question: 'What do I need to do to start selling ?',
        answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 4,
        question: 'What happens when I receive an order ?',
        answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
];

export default function FAQ() {
    const [expandedId, setExpandedId] = useState<number | null>(1); // First item expanded by default

    const toggleItem = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="py-12 sm:py-16 md:py-20">
            <Container>
                {/* FAQ and Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1 px-4 sm:px-6">
                        <div className="relative">
                            <Image 
                                src='/vaccine.svg' 
                                height={500} 
                                width={500} 
                                alt='FAQ illustration'
                                className="w-full h-auto max-w-[450px] mx-auto lg:mx-0"
                                priority
                            />
                        </div>
                    </div>

                    {/* FAQ Content Section */}
                    <div className="space-y-4 order-1 lg:order-2 px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqData.map((item) => (
                                <div
                                    key={item.id}
                                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                                >
                                    <button
                                        onClick={() => toggleItem(item.id)}
                                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                                        <FaChevronDown
                                            className={`w-4 h-4 sm:w-5 sm:h-5 text-[#396CF0] transition-transform duration-300 flex-shrink-0 ${
                                                expandedId === item.id ? 'transform rotate-180' : ''
                                            }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            expandedId === item.id ? 'max-h-48' : 'max-h-0'
                                        }`}
                                    >
                                        <div className="p-4 sm:p-5 border-t text-gray-600 text-sm sm:text-base bg-gray-50">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Get in Touch Section */}
                <div className="mt-16 sm:mt-20 md:mt-24 text-center max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Have Question ? Get in touch!
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                        Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-[#396CF0] text-white text-sm sm:text-base font-medium rounded-lg hover:bg-[#2857d0] transition-colors shadow-sm hover:shadow-md"
                    >
                        Contact us
                    </a>
                </div>
            </Container>
        </section>
    );
}