import { useState } from "react";

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-lg font-medium text-blue-900">
          {faq.question}
        </span>
        <span className="text-2xl text-blue-800">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div className="pb-4 text-gray-700">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
