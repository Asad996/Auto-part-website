import React from 'react';
import 'tailwindcss/tailwind.css';
import loginimg from "../../assets/icons & illustration_page-0001.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex items-center justify-center md:w-1/2 bg-[#FFE4C3] p-6 md:p-20">
        <img
          className="object-contain w-full h-full"
          src={loginimg} // Replace with your image URL
          alt="Login"
        />
      </div>
      <div className="flex flex-col relative justify-center items-center md:w-1/2 p-6 md:p-24 bg-white">
        <div className="w-full max-w-md ">
          <div className="text-right m-4">
            <a href="#" className="text-gray-800">
              Not registered? <span className="font-bold text-[#F7A034]" >Create an account</span>
            </a>
          </div>
          <h2 className="text-sm font-bold mb-2 text-gray-500">Welcome back! 👋</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Login to your account</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F7A034]"
                placeholder="Please enter your email"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F7A034]"
                placeholder="Enter password"
              />
              <span className="absolute inset-y-0 right-3 flex items-center">
                <button type="button" className="text-gray-500 focus:outline-none">
                  <i className="fas fa-eye"></i>
                </button>
              </span>
            </div>
            <button className="w-full bg-[#F7A034] hover:bg-[#f0a03f] text-white p-3 rounded-lg">
              Login
            </button>
          </form>
          <div className="mt-4 text-left">
            <a href="#" className="text-orange-500 hover:text-orange-700">
              Forgot Password?
            </a>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="border-t w-1/4 inline-block"></span>
            <span className="text-gray-400">Or</span>
            <span className="border-t w-1/4 inline-block"></span>
          </div>
          <div className="mt-4 flex justify-center space-x-4 text-xl">
            <button className="bg-white border border-gray-300 p-2  rounded-lg ">
            <i className="bi bi-google"></i>
            </button>
            <button className="bg-blue-600 text-white border border-gray-300 p-2 rounded-lg">
            <i className="bi bi-facebook"></i>
            </button>
            <button className="bg-black text-white border border-gray-300 p-2 rounded-lg ">
            <i className="bi bi-apple"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
