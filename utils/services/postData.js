import getStatusMessage from "../getStatusMessage.js";

export default async function postData(
  url,
  requestBody,
  requestStatusMessageElement
) {
  let status = "loading";
  let data = null;
  let error = null;

  try {
    getStatusMessage(status, error, requestStatusMessageElement);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    data = await response.json();
    status = "fulfilled";
  } catch (err) {
    status = "failed";
    console.error("err:", err);
    error = {
      name: err.name,
      message: err.message,
    };
  } finally {
    getStatusMessage(status, error, requestStatusMessageElement);
    return { status, data, error };
  }
}
