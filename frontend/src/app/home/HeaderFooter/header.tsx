"use client";
import React, { useState } from "react";
import Logo from "../../img/logo";
import Shopicon from "../../img/shopicon";
import Usericon from "../../img/usericon";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setLocation(inputValue);
  
    if (inputValue.length > 2) {
      try {
        const response = await fetch(`https://back-end-blond-beta.vercel.app/location/autocomplete?q=${inputValue}`);
        const data = await response.json();
        setSuggestions(data.locations || []);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };
  

  const handleSelectSuggestion = (suggestion: string) => {
    setLocation(suggestion);
    setSuggestions([]);
  };

  return (


      <div className="w-full h-[68px] bg-[#18181B] flex flex-row justify-between items-center">

        <div className="flex flex-row justify-between items-center mx-[10%] h-[44px] w-[146px] mb-4">
          <Logo className="mt-[10%]" />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-1 text-[20px] font-bold">
              <p className="text-white p-0">Nom</p>
              <p className="text-red-600 p-0">Nom</p>
            </div>
            <p className="text-white">swift delivery</p>
          </div>
        </div>
    
        <div className="flex flex-row justify-between items-center mx-[10%] h-[44px] w-[350px] relative">
          <div className="relative flex items-center w-full">
            <MapPin className="absolute left-3 text-gray-400" size={20} />
            <input
              type="text"
              className="pl-10 pr-4 py-2 border-b-2 border-[#FF7C7C] focus:outline-none w-[256px] h-[36px] rounded-[15px] bg-transparent text-white placeholder:text-gray-400 placeholder:text-[14px]"
              placeholder="Enter delivery address"
              value={location}
              onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-[#18181B] border border-gray-600 rounded-lg mt-1 text-white max-h-[150px] overflow-y-auto z-50">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-700"
                    onClick={() => handleSelectSuggestion(suggestion)}
                  >
                  {suggestion}
                  </li>
                ))}   
              </ul>
            )}
          </div>
          <Shopicon onClick={()=>router.replace("/card")} className="w-[36px] h-[36px]" />
          <Usericon className="w-[36px] h-[36px]" />
        </div>
      </div>

  );
};

export default Page;