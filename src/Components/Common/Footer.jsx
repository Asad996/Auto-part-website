import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">LOGO</h3>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-300"
            />
            <button className="p-2 bg-gray-300 rounded-r-md">></button>
          </form>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p>Jabel Ali Free Zone, Abu Dubai, United Arab Emirates</p>
          <p>abc@gmail.com</p>
          <p>+971-4-886-5100</p>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <ul>
            <li className="mb-2">My Account</li>
            <li className="mb-2">Login / Register</li>
            <li className="mb-2">Cart</li>
            <li className="mb-2">Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms Of Use</li>
            <li className="mb-2">FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Download App</h3>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex items-center space-x-4 mb-4">
            <img src="https://via.placeholder.com/100" alt="Google Play" />
            <img src="https://via.placeholder.com/100" alt="App Store" />
          </div>
          <div className="flex space-x-4">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
