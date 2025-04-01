import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

export const fetchFoodMenu = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.categories; 
  } catch (error) {
    console.error("Error fetching food menu:", error);
    return [];
  }
};
