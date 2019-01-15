export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.playLevel = 10;
    this.isDead = 0;
    this.isCranky = 0;
    this.isBored = 0;
  }

  setHunger() {
    setInterval(() => {
      if (this.foodLevel <= 0) {
        this.isDead = 1;
      } else {
        this.isDead =0;
      }
      if (this.foodLevel >= 0) {
        this.foodLevel--;
        }
    }, 1000);
  }

  setSleep() {
    setInterval(() => {
      if (this.sleepLevel <= 0) {
        this.isCranky = 1;
      } else {
        this.isCranky =0;
      }
      if (this.sleepLevel >= 0) {
        this.sleepLevel--;
        }
    }, 1000);
  }

  setPlay() {
    setInterval(() => {
      if (this.playLevel <= 0) {
        this.isBored = 1;
      } else {
        this.isBored =0;
      }
      if (this.playLevel >= 0) {
        this.playLevel--;
        }
    }, 1000);
  }


  feed() {
    this.foodLevel = 10
  }

  sleep() {
    this.sleepLevel = 10
  }

  play() {
    this.playLevel = 10
  }

}
