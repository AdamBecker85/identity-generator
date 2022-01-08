const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Janek', 'Franek', 'Zenek', 'Benek'];
const femaleNames = ['Zuzia', 'Mania', 'Frania', 'Krysia', 'Zdzisia'];
const lastNames = ['Schmidt', 'Kowalsky', 'Cypsalbozyps', 'Cezary'];

const people =[];

function randChoice(arr){
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

for(let i=0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName = ( gender == 'M' ) ? randChoice(maleNames): randChoice(femaleNames);
  const lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
  const age = Math.floor(Math.random() * 60) + 18;

  const person = {
    gender,
    firstName,
    lastName,
    age,
  };

  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) 
        throw 'Something went wrong';
    else
        console.log('File has been successfully generated! Check people.json');
})

