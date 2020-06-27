import axios from "axios";
import { endpoint } from "../constant";

export default axios.create({
  baseURL: endpoint,
});
