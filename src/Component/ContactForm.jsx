import React from "react";
const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Let's Talk Aviation
      </h2>
      <p className="text-gray-700 mb-8">
        Broadline Aviation is your trusted partner for tailored aircraft
        acquisition solutions. Step into the world of private aviation — let’s
        begin the conversation.
      </p>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            placeholder="+1 234 567 8900"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Aircraft of Interest
          </label>
          <input
            type="text"
            placeholder="e.g. Gulfstream G650"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
