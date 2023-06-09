require('dotenv').config({ path: '.env.local' });
import UFetch from "./utils/UFetch";
import { UInput } from "./utils/UInput";
import UParse from "./utils/UParse";
import UResults from "./utils/UResults";
import * as qs from 'qs';

const nameInput = new UInput();
const name = nameInput.prompt('What is your name?', process.env.DEFAULT_NAME);


const requestNumberInput = new UInput();
const requestNumber = requestNumberInput.prompt('How many vote do you want to add ?', process.env.DEFAULT_VOTE_NUMBER);

const targets = {
  '1':'.meaning__notfound',
  '2':'.meaning__notfound:nth-of-type(2)',
  '3':'.meaning__notfound:nth-of-type(3)',
  '4':'.meaning__notfound:nth-of-type(4)',
};
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const body = {
  vote: 10
};

const data = qs.stringify(body);

for (let index = 0; index < parseInt(requestNumber); index++) {
  const response = UFetch('/vote/' + name, 'POST', headers, data);

  response.then((data) => {
    const results = UParse(data, targets);
    results.then((data:any) => {
      UResults(data);
    });
  });
}