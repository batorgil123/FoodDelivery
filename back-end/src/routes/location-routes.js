import express from "express";
import axios from "axios";

const router = express.Router();
router.get("/autocomplete", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query || query.length < 2) {
      return res.status(400).json({ error: "Query must be at least 2 characters long." });
    }

    const response = await axios.get("https://nominatim.openstreetmap.org/search", {
      params: {
        q: query,
        format: "json",
        limit: 5, 
      },
    });

    const locations = response.data.map((place) => place.display_name);
    res.json({ locations });
  } catch (error) {
    console.error("Error fetching location data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
