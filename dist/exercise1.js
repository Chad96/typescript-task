var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Red";
    TrafficLight["Yellow"] = "Yellow";
    TrafficLight["Green"] = "Green";
})(TrafficLight || (TrafficLight = {}));
var Robot = /** @class */ (function () {
    function Robot() {
        this.currentLight = TrafficLight.Red;
        this.start();
    }
    Robot.prototype.changeLight = function () {
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
        console.log("The light is now ".concat(this.currentLight));
    };
    Robot.prototype.start = function () {
        var _this = this;
        this.changeLight();
        setInterval(function () { return _this.changeLight(); }, 10000);
    };
    return Robot;
}());
new Robot();
