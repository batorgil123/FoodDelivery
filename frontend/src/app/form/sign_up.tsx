"use client";
import React, { useState } from "react";
import { registerUser } from "../services/api";
import SVGComponent from "./signimg";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [message, setMessage] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handlelogin = () => {
    router.push("/login");
  };
  const handleSignUp = async () => {
    try {
      console.log("fdsfsdfsdfdaa:");
      
      const response = await registerUser({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        phoneNumber: userData.phoneNumber,
      });
  
      setMessage("User registered successfully!");
      console.log("Signup Response:", response);
  

      router.push("/home"); 
    } catch (error: any) {
      setMessage(error.message || "Signup failed");
    }
  };
  
  return (
    <div className="w-[100%] flex flex-row justify-between mx-[10%] my-[5%]">
      <div className="flex flex-col my-[10%] items-start justify-center space-y-4">
        <h1 className="text-4xl font-bold">Create your account</h1>
        <p className="text-[#71717A]">
          Sign up to explore your favorite dishes.
        </p>
        <div className="flex flex-col gap-4 w-[100%]">
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={userData.name}
            onChange={handleChange}
            className="border-b-2 border-[#FF7C7C] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            className="border-b-2 border-[#FF7C7C] focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            className="border-b-2 border-[#FF7C7C] focus:outline-none"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            className="border-b-2 border-[#FF7C7C] focus:outline-none"
            required
          />

          <button
            onClick={handleSignUp}
            className="bg-[#FF7C7C] text-white py-2 px-4 rounded-lg"
          >
            Sign up
          </button>
        </div>

        {message && <p className="text-red-500">{message}</p>}

        <div className="flex items-center justify-center gap-3 w-[100%]">
          <p className="text-[#71717A]">Already have an account?</p>
          <button onClick={handlelogin} className="text-[#FF7C7C]">Sign in</button>
        </div>
      </div>
      <SVGComponent />
    </div>
  );
};
export default SignUp;
