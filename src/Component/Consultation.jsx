import React from "react";

const Consultation = () => {
  return (
    <div className="bg-blue-800 flex flex-col items-center justify-center text-white p-5 sm:px-10">
      <h2 className="text-2xl font-semibold">
        Ready to Elevate Your Aviation Experience?
      </h2>
      <p className="text-lg mt-6">
        Contact our team of experts today for personalized assistance
      </p>

      <button className="mt-8 bg-white text-blue p-2 px-4 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer">
        Schedule Consultation
      </button>
    </div>
  );
};

export default Consultation;
