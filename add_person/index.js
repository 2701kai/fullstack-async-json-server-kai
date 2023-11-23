import postData from "../utils/services/postData.js";
import { PERSONS_API } from "../data/API.js";

const firstNameInputElement = document.getElementById("person-firstName");
const lastNameInputElement = document.getElementById("person-lastName");
const formElement = document.querySelector("form");
const requestStatusMessageElement = document.querySelector(
  ".request-status-message"
);

const handleAddPost = async () => {
  await postData(
    PERSONS_API,
    {
      firstName: firstNameInputElement.value,
      lastName: lastNameInputElement.value,
    },
    requestStatusMessageElement
  );
  formElement.reset();
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  handleAddPost();
});
