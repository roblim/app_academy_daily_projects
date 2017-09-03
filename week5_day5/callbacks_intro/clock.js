class Clock {
  constructor() {
    const startTime = new Date();
    this.hours = startTime.getHours();
    this.minutes = startTime.getMinutes();
    this.seconds = startTime.getSeconds();
    this.printTime();
    setInterval(() => this._tick(), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds ++;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes ++;
    }

    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours ++;
    }

    if (this.hours === 24) {
      this.hours = 0;
    }

    this.printTime();
  }
}

const clock = new Clock();
