const request = require("request");
const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    return console.log(`There is no matching breed description!!!`, error);
  }
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(`====================================`)
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`${breed}'s not found.`);
  }
});
