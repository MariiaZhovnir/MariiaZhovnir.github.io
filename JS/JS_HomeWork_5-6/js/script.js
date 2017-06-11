(function () {
    'use strict';

var Timer = function(el) {
    this.startTime = null;
    this.deltaTime = null;
    this.isActive = false;
    this.intervalID = null;
    this.textField = el;

    this.start = function() {
        if (!this.isActive) {
            this.startTime = Date.now() - this.deltaTime;
            this.intervalID = setInterval(this.update.bind(this), 1);
            this.isActive = true;
        }
    };

    this.update = function() {
        this.deltaTime = Date.now() - this.startTime;
        this.updateHTML();
    };

    this.updateHTML = function() {
        var time = new Date(this.deltaTime),
            hours = this.padDigits(time.getUTCHours()),
            min = this.padDigits(time.getMinutes()),
            sec = this.padDigits(time.getSeconds()),
            ms = time.getMilliseconds();

        this.textField.textContent = hours + ':' + min + ':' + sec + ':' + ms;
    };

    this.padDigits = function (val) {
        if (val.toString().length < 2) {
            return '0' + val;
        }
        return val;
     };

    this.pause = function() {
      clearInterval(this.intervalID);
      this.isActive = false;
    };

    this.reset = function() {
        clearInterval(this.intervalID);
        this.deltaTime = 0;
        this.updateHTML();
        this.isActive = false;
    };
};

var startButton = document.querySelector('#start'),
    pauseButton = document.querySelector('#pause'),
    resetButton = document.querySelector('#reset'),
    textField = document.querySelector('#timer-text');

var timer = new Timer(textField);

startButton.addEventListener('click', function() {
    timer.start();
});

pauseButton.addEventListener('click', function() {
    timer.pause();
});

resetButton.addEventListener('click', function() {
    timer.reset();
});
}) ();