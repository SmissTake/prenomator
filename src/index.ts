require('dotenv').config({ path: '.env.local' });
import UFetch from "./utils/UFetch";
import UParse from "./utils/UParse";

const response = UFetch('/prenom/Gwion');

const targets = [
  'title',
  'h1'
];

response.then((data) => {
  UParse(data, ...targets);
});