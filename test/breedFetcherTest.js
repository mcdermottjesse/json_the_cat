const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
 
    it('returns an error message when invalid/non-existent breed is passed in', () => {
      fetchBreedDescription('Sibb', (err, desc) => {

        //assert.equal(err, null)


        const expectedDesc = `The requested breed Sibb is not found`
        // compare returned description
        assert.equal(expectedDesc, desc.trim());

        //done();

      });
    });
      it('returns a string description for a valid breed, via callback', () => {
        fetchBreedDescription('Siberian', (err, desc) => {
          // we expect no error for this scenario
          //assert.equal(err, null);
    
    
          const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
    
          // compare returned description
          assert.equal(expectedDesc, desc.trim());
    
         // done();
    
        }); 
    });


  });
