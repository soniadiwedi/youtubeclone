import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
        '3a5c91342dmshce93e3ad78308f1p1c41fajsn88bd5390772d',
    
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};


export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};