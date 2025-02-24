import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(express.json());

const mongoString = process.env.CONNECTION_STRING;
mongoose.connect(mongoString).
  catch(error => handleError(error));
try {
  await mongoose.connect(mongoString);
} catch (error) {
  res.send(error);
}
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
