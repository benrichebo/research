/**
 * 1. Read data from the backend that comes through this http request function
 * 2. Functions: resolve()
 * 3. Parameters: url, data
 **/

export const STRIPE = async (url) => {
  const sessionData = sessionStorage.getItem("authToken");
  const authToken = JSON.parse(sessionData);

  const config = {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${sessionData && authToken}`,
    },
    timeout: 5000,
  };

  //2. return response and error
  try {
    const resp = await fetch(url, config);
    return resp.json();
  } catch (error) {
    return error.message;
  }
};
