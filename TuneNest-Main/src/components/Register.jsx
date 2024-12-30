import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
        e.preventDefault();

        if(password == cpassword)
        {
          try {
            
            const response = await axios.post("http://localhost:4000/api/user/add", {
              email,
              password
            });

              if (response.data.success) {
                toast.success("Registered Successfully!");
                console.log("Registered Successfully!")
                setEmail("");
                setcPassword("");
                setPassword("");
                navigate("/login");
              }
              else {
                toast.error("Something went wrong!");
                console.log(response.data.message);
              }
           
            } catch (error) {
              toast.error("Error Occured!");
              console.log(error);
            }
        } else {
          console.log("Password is not matching!!");
        }

    }


  return (
    <div className="h-screen bg-cover bg-center bg-custom-lightest">
      <div className="flex items-center justify-center h-full">
        <div className="w-96 bg-white p-8 rounded-lg shadow-xl">
          <div className="flex justify-center mb-6">
            <img src={assets.logo} alt="TuneNest" className="w-36" />
          </div>

          <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign in to TuneNest</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email or username"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                onChange={(e) => setcPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-custom-base text-white font-semibold rounded-lg hover:bg-white hover:border-solid border-4 border-custom-base hover:text-custom-base transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="font-semibold text-custom-base hover:underline">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;