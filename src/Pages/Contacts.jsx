const Contact = () => {
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

      {/* Inquiry Form */}
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

      {/* Contact Info Panel */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">
          Contact Info
        </h3>
        <p className="text-gray-700 mb-1">Phone: +1 786-860-7518</p>
        <p className="text-gray-700 mb-1">
          Email: Broadlineaviationcorp@gmail.com
        </p>
        <p className="text-gray-700">
          Follow us on Instagram:{" "}
          <a
            href="https://instagram.com/broadline_aviation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            @broadline_aviation
          </a>
        </p>
      </div>

      {/* Final CTA Banner */}
      <div className="mt-10 p-6 bg-blue-900 text-white text-center rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">
          A personalized aircraft journey starts here.
        </h3>
        <p>Let’s elevate your private aviation experience together.</p>
      </div>
    </div>
  );
};

export default Contact;
