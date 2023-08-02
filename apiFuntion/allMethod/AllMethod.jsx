import axios from "axios";

const postApiCall = async (path, microservice, data, headers) => {
  try {
    let response = await axios.post(
      `${process.env.baseUrl}/${process.env.apiType?.[microservice]}/${path}`,
      data,
      {
        headers: {
          ...{
            "rp-cuid": "Test",
          },
          ...headers,
        },
      }
    );
    return response?.data;
  } catch (e) {
    return {
      success: false,
      message: "Something Went Wrong",
      data: {},
    };
  }
};

const getApiCall = async (path, microservice, headers) => {
  try {
    let response = await axios.get(
      `${process.env.baseUrl}/${process?.env?.apiType?.[microservice]}/${path}`,
      {
        headers: {
          ...{
            "rp-cuid": "Test",
          },
          ...headers,
        },
      }
    );
    return response?.data;
  } catch (e) {
    return {
      success: false,
      message: "Something Went Wrong",
      data: {},
    };
  }
};

const putApiCall = async (path, microservice, data, headers) => {
  try {
    let response = await axios.put(
      `${process.env.baseUrl}/${process.env.apiType?.[microservice]}/${path}`,
      data,
      {
        headers: {
          ...{
            "rp-cuid": "Test",
          },
          ...headers,
        },
      }
    );
    return response?.data;
  } catch (e) {
    return {
      success: false,
      message: "Something Went Wrong",
      data: {},
    };
  }
};

const deleteApiCall = async (path, microservice, headers) => {
  try {
    let response = await axios.delete(
      `${process.env.baseUrl}/${process.env.apiType?.[microservice]}/${path}`,
      {
        headers: {
          ...{
            "rp-cuid": "Test",
          },
          ...headers,
        },
      }
    );
    return response?.data;
  } catch (e) {
    return {
      success: false,
      message: "Something Went Wrong",
      data: {},
    };
  }
};

export { postApiCall, getApiCall, putApiCall, deleteApiCall };
