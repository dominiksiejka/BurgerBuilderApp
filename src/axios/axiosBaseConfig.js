import axios from "axios";

const fetchData = axios.create({
  baseURL: "https://burger-app-9ee8c-default-rtdb.firebaseio.com",
});

export default fetchData;
