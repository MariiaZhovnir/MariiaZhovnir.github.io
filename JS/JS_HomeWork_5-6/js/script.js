(function () {
'use strict';
    var Timer;
    Timer = function () {
        this.timeField = {};
        this.switched = false;
        this.startTime = 0;
        this.deltaTime = 0;
        this.intervalID = null;

        this.createTimerShell = function () {
            var container = document.createElement('div');
            container.setAttribute('class', 'timer');

            var startButton = document.createElement('button');
            startButton.setAttribute('class', 'start');
            startButton.innerHTML = 'START';

            var pauseButton = document.createElement('button');
            pauseButton.setAttribute('class', 'pause');
            pauseButton.innerHTML = 'PAUSE';

            var resetButton = document.createElement('button');
            resetButton.setAttribute('class', 'reset');
            resetButton.innerHTML = 'RESET';

            this.timeField.timeWindow = document.createElement('p');
            this.timeField.timeWindow.setAttribute('class', 'time-window');
            this.timeField.timeWindow.innerHTML = '0';

            startButton.addEventListener('click', this.start.bind(this));
            startButton.addEventListener('click', this.restart.bind(this));
            pauseButton.addEventListener('click', this.pause.bind(this));
            resetButton.addEventListener('click', this.reset.bind(this));

            container.appendChild(this.timeField.timeWindow);
            container.appendChild(startButton);
            container.appendChild(pauseButton);
            container.appendChild(resetButton);

            return container;
        };

        this.start = function () {
            if (!this.switched) {
                this.startingPoint();
                this.intervalID = setInterval(this.timeChanging.bind(this), 1);
                this.switched = true;
            }
        };

        this.startingPoint = function () {
            this.startTime = Date.now();
        };

        this.timeChanging = function () {
            this.deltaTime = new Date(Date.now() - this.startTime);
            this.updateHTML();
        };

        this.updateHTML = function () {
            this.timeField.timeWindow.innerHTML = this.deltaTime.getMinutes() + ':' + this.deltaTime.getSeconds() + ':' + this.deltaTime.getMilliseconds();
        };

        this.pause = function () {
            clearInterval(this.intervalID);
            this.switched = false;
        };

        this.restart = function () {
            if (!this.switched) {
                this.pauseTime();
                this.intervalID = setInterval(this.timeChanging.bind(this), 1);
                this.switched = true;
            }
        };

        this.pauseTime = function () {
            this.startTime = this.deltaTime;
        };

        this.reset = function () {
            this.startTime = 0;
            this.timeField.timeWindow.innerHTML = '0';
            this.switched = false;
        };

        this.init = function () {
            var timerInit = document.querySelector('#root');
            timerInit.appendChild(this.createTimerShell());
        };
    };
    var timer = new Timer();
    console.log(timer);
    timer.init();
}) ();
