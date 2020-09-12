const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;

const onPeopleResponse = ({name}) => console.log(`Soy: ${name}`)

fetch(LUKE_URL)
    .then((response) => response.json())
    .then((character) => onPeopleResponse(character))
    .catch( error => console.log(error));