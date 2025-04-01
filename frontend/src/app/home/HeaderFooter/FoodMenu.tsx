"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getFoods, orderFooditem,signInUser } from "../../services/api";
import Highlight from "../../img/highlight";

interface Food {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string[];
  category: string;
}

export default function FoodMenu() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);

  useEffect(() => {
    getFoods()
      .then((foods) => {
        setFoods(foods);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleQuantityChange = (foodId: string, quantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [foodId]: quantity,
    }));
  };

  const handleOrder = async (userId:string,foodId: string) => {
    const quantity = quantities[foodId] || 1;

    if (quantity <= 0) return;

    try {
      console.log("Ordering food:", {userId, foodId, quantity });
      const response = await orderFooditem({userId, foodId, quantity });
      alert(response);
      setIsBagOpen(true);
    } catch (error) {
      console.log("Error ordering food:", error);
    }
  };

  const categories = ["All", ...new Set(foods.map((food) => food.category))];
  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  return (
    <div className="max-w-[1400px] mx-auto pt-0 p-6 flex flex-col items-center relative">
      <Highlight className="mb-3" />

      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse"
              >
                <div className="w-[500px] h-[300px] bg-gray-200 mb-4" />
                <div className="p-4">
                  <div className="h-8 bg-gray-200 w-full mb-3" />
                  <div className="h-6 bg-gray-200 w-3/4 mb-2" />
                  <div className="h-5 bg-gray-200 w-2/3 mb-2" />
                  <div className="h-5 bg-gray-200 w-1/2 mb-2" />
                </div>
              </div>
            ))
          : filteredFoods.map((food) => (
              <div
                key={food._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image 
                  src={food.image.trim()}
                  alt={food.foodName}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {food.foodName}
                  </h3>
                  <p className="text-lg text-gray-600 mt-2">
                    Price: ${food.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Ingredients: {food.ingredients.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Category: {food.category}
                  </p>

                  <div className="flex items-center mt-4">
                    <input
                      type="number"
                      min="1"
                      value={quantities[food._id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(food._id, Number(e.target.value))
                      }
                      className="w-16 border border-gray-300 rounded-lg px-2 py-1 text-center mr-2"
                    />
                    <button
                      onClick={() => handleOrder(userId,food._id)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div
        className={`fixed bottom-4 right-0 transform transition-transform ${
          isBagOpen ? "translate-x-0" : "translate-x-full"
        } bg-gray-800 text-white p-6 shadow-lg rounded-lg z-10`}
      >
        <p>Bag</p>
      </div>
    </div>
  );
}
