const PERSONS_API_URL = "http://localhost:3000/persons";
const personSection = document.getElementById("persons-section");

async function getPersons() {
  let error = null;
  let persons = null;
  try {
    const response = await fetch(PERSONS_API_URL);
    const data = await response.json();
    persons = data;
  } catch (err) {
    error = {
      message: err.message,
      name: err.name,
    };
  } finally {
    return {
      error,
      persons,
    };
  }
}

const renderPersons = async () => {
  const persons = await getPersons();
  const personsList = persons.map((person) => {
    return `
        <div class="person">
            <h2>${person.name}</h2>
            <p>${person.age}</p>
        </div>
        `;
  });
  personSection.innerHTML = personsList.join("");
};

fetch(PERSONS_API_URL);

getPersons();
