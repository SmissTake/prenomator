require('dotenv').config({ path: '.env.local' });
import CName from "./utils/CName";
import UFetch from "./utils/UFetch";
import { UInput } from "./utils/UInput";
import UParse from "./utils/UParse";
import UResults from "./utils/UResults";
import * as qs from 'qs';

const menuInput = new UInput();
const menu = menuInput.menu('What do you want to do ?', ['Calculate number of vote for a targeted average', 'Add votes']);

switch (menu) {
  case 'Calculate number of vote for a targeted average':
    calculateNumberOfVote();
    break;
  case 'Add votes':
    addVotes();
    break;
  default:
    break;
}


function calculateNumberOfVote() {
  const currentAverageInput = new UInput();
  const currentAverage = parseFloat(currentAverageInput.prompt('What is the current average ?'));

  const currentTotalVotesInput = new UInput();
  const currentTotalVotes = parseFloat(currentTotalVotesInput.prompt('How many vote does the name have ?'));

  const targetAverageInput = new UInput();
  const targetAverage = parseFloat(targetAverageInput.prompt('What is the target average ?'));

  const nameTarget = new CName(currentTotalVotes, currentAverage);
  console.log("number of vote needed : "+nameTarget.getVoteForNewAverage(targetAverage));
}

function addVotes() {
  const nameInput = new UInput();
  const name = nameInput.prompt('What is your name?', process.env.DEFAULT_NAME);


  const requestVoteInput = new UInput();
  const requestVote = requestVoteInput.prompt('What vote do you want to add ?', process.env.DEFAULT_VOTE);

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
    vote: requestVote
  };

  const username = process.env.LUMINATI_USERNAME;
  const password = process.env.LUMINATI_PASSWORD;
  const port = process.env.LUMINATI_PORT;
  const host = process.env.LUMINATI_PROXY;

  const proxy = {
    host: host,
    port: port,
    auth: {
      username: username,
      password: password
    }
  };


  const data = qs.stringify(body);
  const promises = [] as any;
  async function main() {
    for (let index = 0; index < parseInt(requestNumber); index++) {
      try {
        const response = await UFetch('/vote/' + name, 'POST', headers, index % 2 === 0 ? proxy : null, data);
        const results = await UParse(response, targets);
        UResults(results as {[key: string]: string}, index);
        promises.push(response);
      } catch (error) {
        console.error(error);
      }
    }
  }

  Promise.all(promises)
    .then((results) => {
      results.forEach((data, index) => {
        if (data) {
          UResults(data as {[key: string]: string}, index);
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });

  main();
}