import getData from "../utils/services/getData.js";
import { PERSONS_API } from "../data/API.js";

const requestStatusMessageElement = document.querySelector(
  ".request-status-message"
);

const personsContainer = document.getElementById("persons-section");

export default async function renderPersons() {
  const persons = await getData(PERSONS_API, requestStatusMessageElement);
  const { status, error, data } = persons;

  console.log("status:", status);
  console.log("error:", error);
  console.log("data:", data);

  const personsList = data.map((person) => {
    return `<div class="person-container"><p>First Name: <strong>${person.firstName}</strong><p> <p>Last Name: <strong>${person.lastName}</strong></p></div>`;
  });

  personsContainer.innerHTML = personsList.join("");
}
