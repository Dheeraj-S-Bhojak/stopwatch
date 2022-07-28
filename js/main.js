const stopWatch = {
    miliSec: 0,
    seconds: 0,
    minutes: 0,
    run: "",
    start() {
        this.run = setInterval(() => {
            stopWatch.startWatch();
        }, 10);

    },

    startWatch() {
        this.miliSec++;
        if (this.miliSec < 99) {
            document.getElementById("milisecond").innerHTML = this.miliSec;

        }
        if (this.miliSec > 99) {
            this.miliSec = 0;
            this.seconds = this.seconds + 1;
            document.getElementById("seconds").innerHTML = this.seconds;
        }
        if (this.seconds == 59) {
            this.seconds = 0;
            this.minutes++;
            document.getElementById("minutes").innerHTML = this.minutes;

        }

    },
    stop() {
        clearInterval(this.run);
    },
    restart() {
       
        window.location = "index.html";

    }
}