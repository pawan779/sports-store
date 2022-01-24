import axios from "axios";

const baseUrl = "http://192.168.0.71:3001/";
axios.defaults.baseURL = baseUrl;

const config = async () => {
  const token = await localStorage.getItem("token");
  console.log(token);
  if (token) {
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
};

const getRequests = async (url: any) => {
  try {
    console.log("Request ::" + url + "=>", {
      headers: await config(),
    });
    const response = await axios.get(url, {
      headers: await config(),
    });
    console.log("Response :: " + url + "=>", response);
    return response;
  } catch (err: any) {
    console.log("Error ::" + url + "=>", err.response, err);
    throw err;
  }
};

const postRequests = async (url: any, data: any) => {
  try {
    console.log("Request ::" + url + "=>", {
      headers: await config(),
    });
    const response = await axios.post(url, data, {
      headers: await config(),
    });
    console.log("Response :: " + url + "=>", response);
    return response;
  } catch (err: any) {
    console.log("Error ::" + url + "=>", err.response, err);
    throw err;
  }
};

export default {
  getProduct: (data?: any) => {
    const url = "products";
    return getRequests(url);
  },
  login: (data?: any) => {
    const url = "login";
    return postRequests(url, data);
  },
  imageUrl: (data?: any) => {
    return baseUrl;
  },
};
