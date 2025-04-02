import axios from "axios";

//  const API_URL = "http://localhost:5000";
const API_URL = "https://back-end-blond-beta.vercel.app";

interface Food {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string[];
  category: string;
}

interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

interface Order {
  userId: string;
  foodId: string;
  quantity: number;
}

export const registerUser = async (userData: User): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error registering user");
  }
};

export const signInUser = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}/signin`, { email, password });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userId", response.data.id);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;

    return response.data;
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
};

export const getFoods = async (): Promise<Food[]> => {
  try {
    const response = await axios.get(`${API_URL}/food`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error fetching foods");
  }
};

export const orderFooditem = async (Order: Order): Promise<string> => {
  try {
    console.log("Ordering food with id: ", Order);

    const response = await axios.post(`${API_URL}/order/item`, Order, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data.message;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error placing the order");
  }
};
