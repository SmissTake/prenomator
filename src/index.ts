require('dotenv').config({ path: '.env.local' });
import UFetch from "./utils/UFetch";
import { UInput } from "./utils/UInput";
import UParse from "./utils/UParse";

const nameInput = new UInput();
const name = nameInput.prompt('What is your name? ');

const targets = [
  '.meaning__notfound',
  '.section__greybold',
];
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const urlencoded = new URLSearchParams();
urlencoded.append("vote", "10");

const body = {
  urlencoded
};

const response = UFetch('/vote/' + name, 'POST', headers, body);

response.then((data) => {
  const results = UParse(data, ...targets);
  results.then((data) => {
    console.log(data);
  });
});