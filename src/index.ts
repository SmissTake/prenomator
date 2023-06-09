require('dotenv').config({ path: '.env.local' });
import UFetch from "./utils/UFetch";
import { UInput } from "./utils/UInput";
import UParse from "./utils/UParse";
import UResults from "./utils/UResults";
import * as qs from 'qs';

const nameInput = new UInput();
const name = nameInput.prompt('What is your name?', process.env.DEFAULT_NAME);

const targets = {
  'Résultat':'.meaning__notfound',
  'Moyenne':'.section__greybold:nth-of-type(2)',
};
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const body = {
  vote: 10
};

const data = qs.stringify(body);

const response = UFetch('/vote/' + name, 'POST', headers, data);

response.then((data) => {
  const results = UParse(data, targets);
  results.then((data:any) => {
    UResults(data);
  });
});