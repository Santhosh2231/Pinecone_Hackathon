import React, { useState } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    
  {
    question: "How does the crop disease detection system work?",
    answer: "Our crop disease detection system uses pinecone similarity search image analysis techniques and machine learning algorithms to analyze uploaded crop leaf images. It identifies patterns, signs of diseases, pests, or nutrient deficiencies, and provides accurate results to help you take necessary actions for crop health."
  },
  {
    question: "What types of crops does the system support?",
    answer: "Our system supports a wide range of crops, including but not limited to fruits, vegetables, grains, and ornamental plants. It caters to various agricultural and horticultural crops commonly grown by farmers and gardeners."
  },
  {
    question: "Can I upload images taken from a mobile device?",
    answer: "Yes, you can upload crop leaf images taken from any device, including smartphones, tablets, or digital cameras. The system is designed to process images in various formats and resolutions for analysis."
  },
  {
    question: "Are the fertilizer recommendations specific to my crop's needs?",
    answer: "Our fertilizer recommendations are tailored based on the analysis of your crop leaf images and common nutrient requirements for the specific crop types. However, it's important to consider factors such as soil conditions, climate, and local agricultural practices when implementing fertilizer recommendations."
  },
  {
    question: "How frequently should I upload crop leaf images for analysis?",
    answer: "The frequency of uploading crop leaf images for analysis depends on your crop's growth stage, weather conditions, and any noticeable changes in crop health. As a general guideline, it's recommended to monitor your crops regularly and upload images whenever you observe significant changes or suspect potential issues."
  }


    // Add more FAQ objects here...
  ];

  return (
    <div className="w-2/3 mx-auto">
     <h3 className='text-3xl text-justify font-bold my-10'>FAQ</h3>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-200 py-4"
        >
          <button
            className="flex justify-between items-center w-full focus:outline-none"
            onClick={() => handleAccordionClick(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <svg
              className={`w-5 h-5 transition-transform ${
                index === activeIndex ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {index === activeIndex && (
            <p className="mt-2 text-justify text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
