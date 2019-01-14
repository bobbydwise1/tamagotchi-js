import { Tamagotchi } from './tamagotchi.js';

describe('Tamagotchi', function() {
  let pet = new Tamagotchi("Chip");

  beforeEach(function() {
    jasmine.clock().install();
    pet.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(pet.name).toEqual("Fuzzy");
    expect(pet.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(pet.playLevel).toEqual(7);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(pet.sleepLevel).toEqual(7);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(pet.didPetGetCranky()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    pet.feed();
    expect(pet.foodLevel).toEqual(10);
  });

  it('pet will leave if the food level is 0, pet will die', function() {
    jasmine.clock().tick(8001);
    expect(pet.isPetAlive()).toEqual(true);
  });

  it('if the sleep level is 0, pet will become cranky', function() {
    jasmine.clock().tick(7001);
    expect(pet.isPetSleepy()).toEqual(true);
  });

  it('if the play level is 0, pet found a new owner', function() {
    jasmine.clock().tick(6001);
    expect(pet).toEqual(undefined);  //Note there is not a real way to delete an object in Javascript
  });

});
