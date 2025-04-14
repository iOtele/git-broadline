import React, { useContext } from "react";
import FAQItem from "../Component/FAQItem";
import { StoreContext } from "../Context/StoreContext";
const FAQ = () => {
  const { faqData } = useContext(StoreContext);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-blue-900 mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-700 mb-8">
        Got a question? We've compiled answers to the most common inquiries
        about our aircraft acquisition and inspection services.
      </p>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <FAQItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
