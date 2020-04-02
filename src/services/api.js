import axios from "axios";
import "dotenv/config";

export const generateData = axios.create({
  baseURL: process.env.GENERATE_DATA + process.env.TOKEN
});

export const solution = axios.create({
  baseURL: process.env.SOLUTION + process.env.TOKEN
});
