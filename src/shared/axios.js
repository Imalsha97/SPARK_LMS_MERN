import axios from "axios";

const lmsAPIMostProd = "https://lms-backend4.herokuapp.com/";
const lmsAPIMostDev = "http://localhost:3000";
const lmsAPIMost =
  process.env.NODE_ENV === "development" ? lmsAPIMostDev : lmsAPIMostProd;

const instance = axios.create({
  baseURL: lmsAPIMost,
});

export default instance;
