import { postApiCall } from "../allMethod/AllMethod";

export async function adminLogin(data) {
  return await postApiCall("customer/login", "authMicroService", data);
}

