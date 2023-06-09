require('dotenv').config({ path: '.env.local' });
import UFetch from "./utils/UFetch";
import { UInput } from "./utils/UInput";
import UParse from "./utils/UParse";

const response = UFetch('/prenom/Gwion');

const ui = new UInput();
const name = ui.prompt('What is your name? ');
console.log(`Hello, ${name}!`);

const targets = [
  'title',
  'h1'
];

response.then((data) => {
  const results = UParse(data, ...targets);
  results.then((data) => {
    console.log(data);
  });
});