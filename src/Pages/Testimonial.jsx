import React, { useContext } from "react";
import TestimonialCard from "../Component/TestimonialCard";
import { StoreContext } from "../Context/StoreContext";

const Testimonials = () => {
  const { testimonialsData } = useContext(StoreContext);
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold w-full text-center mb-4">
        Client Stories
      </h2>
      <p className="text-gray-700 mb-8">
        Real experiences from discerning clients who’ve trusted Broadline
        Aviation for their private aircraft acquisitions.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
