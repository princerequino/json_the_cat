const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv[2];


fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log(`Error Details: `, error);
  } else {
    console.log(`Description: `, description);
  }
});

