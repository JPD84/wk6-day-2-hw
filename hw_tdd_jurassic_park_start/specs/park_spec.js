const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {

  })

  it('should have a name');
  const expected = (parkName)
  return 'jurassic_park'


  it('should have a ticket price');
  const expected = 12;
  assert.strictEqual(ticketPrice.ticketPrice, expected);
});

  it('should have a collection of dinosaurs');
  const expected = [];
  assert.deepStrictEqual(dinosaur.collectionOfDinosaurs, expected)
});

  it('should be able to add a dinosaur to its collection');
  collection.addDinosaur(dinosaur5);
  const expected =[dinosaur5];
  assert.deepStrictEqual(collection.collectionOfDinosaurs, expected)
});

  it('should be able to remove a dinosaur from its collection');
  collection.removeDinosaur(collectionOfDinosaurs);
  const expected = 0;
  assert.strictEqual(collectionOfDinosaurs.calcuateDinosaurAmount(), expected);
});

  it('should be able to find the dinosaur that attracts the most visitors');
  
})
  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});



// MVP
// A dinosaur must have:

// A species
// A diet (e.g. carnivore, herbivore or omnivore)
// An average number of visitors attracted per day

// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs

// A park must be able to:
//
// Add a dinosaur to its collection of dinosaurs
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year
