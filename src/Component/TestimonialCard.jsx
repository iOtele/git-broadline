import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition bg-white">
      <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
      <p className="font-semibold text-blue-900">{testimonial.clientName}</p>
      <p className="text-sm text-gray-500">Aircraft: {testimonial.aircraft}</p>
    </div>
  );
};

export default TestimonialCard;
