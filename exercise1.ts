enum TrafficLight {
  Red = "Red",
  Yellow = "Yellow",
  Green = "Green",
}

class Robot {
  private currentLight: TrafficLight;

  constructor() {
    this.currentLight = TrafficLight.Red;
    this.start();
  }

  private changeLight() {
    switch (this.currentLight) {
      case TrafficLight.Red:
        this.currentLight = TrafficLight.Green;
        break;
      case TrafficLight.Green:
        this.currentLight = TrafficLight.Yellow;
        break;
      case TrafficLight.Yellow:
        this.currentLight = TrafficLight.Red;
        break;
    }
    console.log(`The light is now ${this.currentLight}`);
  }

  public start() {
    this.changeLight();
    setInterval(() => this.changeLight(), 10000);
  }
}

new Robot();
