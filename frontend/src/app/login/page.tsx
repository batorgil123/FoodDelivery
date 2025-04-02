"use client";
import React, { useState } from "react";
import SVGComponent from "../form/signimg";
import { useRouter } from "next/navigation";
import { signInUser } from "../services/api";

const SignIn = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    try {
      const response = await signInUser(userData.email, userData.password);
      if (response.token) {
        localStorage.setItem("userId", response.id);
        localStorage.setItem("token", response.token);
        router.replace("/home");
      } else {
        setMessage("Invalid email or password");
      }
    } catch (error: any) {
      setMessage(error?.response?.data?.message || "An error occurred during sign-in");
    }
  };
  

  return (
    <div className="w-full flex flex-row justify-between py-[5%] px-[10%]">
      <div className="flex flex-col my-[10%] items-start justify-center space-y-4">
        <p className="text-[#71717A]">
          Sign in to explore your favorite dishes.
        </p>

        <div className="flex flex-col gap-4 w-full">
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

          <button
            onClick={handleSignIn}
            className="bg-[#FF7C7C] text-white py-2 px-4 rounded-lg"
          >
            Sign in
          </button>
        </div>

        {message && <p className="text-red-500">{message}</p>}
      </div>
      <SVGComponent />
    </div>
  );
};

export default SignIn;
