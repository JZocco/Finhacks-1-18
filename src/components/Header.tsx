import React, { useState } from "react";

const Header = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  // Toggle functions for modals
  const toggleSignUp = () => setShowSignUp(!showSignUp);
  const toggleLogIn = () => setShowLogIn(!showLogIn);

  return (
    <header className="bg-blue-100 w-screen p-4">
      <ul className="text-xl flex justify-between items-center">
        {/* Left: Logo and title */}
        <div className="flex items-center">
          <img src="CouponKing.png" alt="Logo" className="h-10 w-10 mr-3" />
          <li className="text-black-700 text-3xl font-bold">CouponKings</li>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 border border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
            onClick={toggleLogIn} // Open Log In modal
          >
            Log In
          </button>
          <button
            className="px-4 py-2 border border-green-500 bg-green-500 text-white hover:bg-green-600"
            onClick={toggleSignUp} // Open Sign Up modal
          >
            Sign Up
          </button>
        </div>
      </ul>

      {/* Log In Modal */}
      {showLogIn && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Log In
              </button>
            </form>
            <button
              className="mt-4 text-red-500 underline"
              onClick={toggleLogIn} // Close modal
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Sign-Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Sign Up
              </button>
            </form>
            <button
              className="mt-4 text-red-500 underline"
              onClick={toggleSignUp} // Close modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
