/**
 * 1. Read data from the backend that comes through this http request function
 * 2. Functions: resolve()
 * 3. Parameters: url, data
 **/

export const POST = async (data, url) => {
  const sessionData = sessionStorage.getItem("user");
  const token = JSON.parse(sessionData);
  const authToken = token?.authToken;

  const config = {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${sessionData && authToken}`,
    },
    body: JSON.stringify(data),
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
