require('dotenv').config({ path: '.env.local' });
import UFetch from "./utils/UFetch";
import { UInput } from "./utils/UInput";
import UParse from "./utils/UParse";

const nameInput = new UInput();
const name = nameInput.prompt('What is your name? ');

const targets = [
  'title',
  'h1'
];
const headers = {
};

const body = {
};

const response = UFetch('/prenom/' + name, 'GET', headers, body);

response.then((data) => {
  const results = UParse(data, ...targets);
  results.then((data) => {
    console.log(data);
  });
});