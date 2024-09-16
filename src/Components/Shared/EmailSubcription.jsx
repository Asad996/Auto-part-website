import React from 'react';
import 'tailwindcss/tailwind.css';

const EmailSubscription = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center my-24">
      <h2 className="text-2xl font-semibold text-gray-900 ">
        Want First Dibs?
      </h2>
      <p className="mt-1 text-md leading-6 text-gray-600">
        Join our email list and be the first one to know about new products, material innovations, and latest updates.
      </p>
      <div className="mt-2 flex justify-center">
        <div className="flex w-full max-w-md">
          <input
            type="email"
            className="w-full h-12 rounded-l-full py-3 px-4 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F7A034] focus:border-transparent"
            placeholder="Type your email address here"
          />
          <button className="bg-[#F7A034] h-12 hover:bg-[#F7A034] text-white rounded-r-full px-8 items-center flex">
            Send
          </button>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Note: You can opt out at any time. See our <a href="#" className="underline text-[#F7A034]">Privacy Policy</a> &amp; <a href="#" className="underline text-[#F7A034]">Terms</a>.
      </p>
    </div>
  );
};

export default EmailSubscription;
