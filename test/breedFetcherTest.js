
const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it(`Should return "Breed's not found" if non-existent breed is passed, via callback`, (done) => {
    fetchBreedDescription('ASDKSA', (err, desc) => {
      // we expect null for description when an error is thrown
      assert.equal(desc, null); // ASDKSA will have a description with NOTHING in it === null

      // console.log(`The Error: `, err);
      // console.log(`Description >>> `, desc);


      const expectedError = "Cannot Find";

      // compare returned description
      assert.equal(expectedError, err);

      done();
    });
  });
});



