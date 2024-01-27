import React from "react";

function Signup() {
  return (
    <div className="relative w-full h-screen bg-zinc-900/60">
      <div className="flex justify-center items-center h-full">
        
        <form className="max-w-[500px] w-full mx-auto bg-white p-8">
        <h2 className="text-4xl text-center  font-bold py-4 mb-6">Sign Up</h2>
        <div className="flex flex-col mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="username">
              Name*
            </label>
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="username">
              Username*
            </label>
            <input
              className="border relative bg-gray-100 p-2"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
              Email*
            </label>
            <input
              className="border relative bg-gray-100 p-2"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="username">
              Contact Number*
            </label>
            <input
              className="border relative bg-gray-100 p-2"
              type="number"
              id="contactno"
              name="contactno"
              placeholder="Enter your Phone Number"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
              Password*
            </label>
            <input
              className="border relative bg-gray-100 p-2"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
