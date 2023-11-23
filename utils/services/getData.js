import getStatusMessage from "../getStatusMessage.js";

export default async function getData(url, requestStatusMessageElement) {
  let status = "loading";
  let data = null;
  let error = null;

  try {
    getStatusMessage(status, error, requestStatusMessageElement);
    const response = await fetch(url);
    data = await response.json();
    status = "fulfilled";
  } catch (err) {
    console.log("err:", err);
    error = {
      name: err.name,
      message: err.message,
    };
  } finally {
    getStatusMessage(status, error, requestStatusMessageElement);
    return { status, data, error };
  }
}
