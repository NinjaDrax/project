

import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-custom-lightest">
      <div className="flex items-center justify-center h-full">
        <div className="w-96 bg-white p-8 rounded-lg shadow-xl">
          <div className="flex justify-center mb-6">
            <img src={assets.logo} alt="TuneNest" className="w-36" />
          </div>

          <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign in to TuneNest</h1>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or username</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email or username"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-custom-base text-white font-semibold rounded-lg hover:bg-white hover:border-solid border-4 border-custom-base hover:text-custom-base transition duration-200"
            >
              Log In
            </button>
          </form>

          <div className="text-center mt-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">Forgot your password?</a>
          </div>
          <div className="text-center mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-custom-base hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>

    </div>

  );
        
        
};

export default Login;
