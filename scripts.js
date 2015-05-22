(function () {
    var edays  = document.getElementById("days"),
        ehours = document.getElementById("hours"),
        emins  = document.getElementById("minutes"),
        esecs  = document.getElementById("seconds"),
        ednoun = document.getElementById("daynoun"),
        ehnoun = document.getElementById("hournoun"),
        emnoun = document.getElementById("minnoun"),
        esnoun = document.getElementById("secnoun");

    function countDown() {
        var seconds = Math.round((Date.UTC(2015,7,15,12) - Date.now())/1000);
        var days = Math.floor(seconds/3600/24);
        seconds -= days * 24 * 3600;
        var hours = Math.floor(seconds/3600);
        seconds -= hours * 3600;
        var minutes = Math.floor(seconds/60);
        seconds -= minutes * 60;
        edays.innerHTML  = days;
        ehours.innerHTML = hours;
        emins.innerHTML  = minutes;
        esecs.innerHTML  = seconds;
        ednoun.innerHTML = (Math.abs(days) === 1) ? "": "ar";
        ehnoun.innerHTML = (Math.abs(hours) === 1) ? "e": "ar";
        emnoun.innerHTML = (Math.abs(minutes) === 1) ? "": "er";
        esnoun.innerHTML = (Math.abs(seconds) === 1) ? "": "er";
    }
    countDown();
    setInterval(countDown, 200);

    // Bugfixing Chrome and iOS Safari
    var ua = document.getElementById("ua");
    var startimg = document.getElementsByClassName("startimg")[0];

    if (matchMedia) {
        var mq = window.matchMedia("(max-width: 540px)");
        mq.addListener(widthChange);
        if ( mq.matches ) {
            widthChange(mq);
        }
    }

    function widthChange(mq) {
        var lbl = document.getElementsByTagName("label")[0];
        if ( mq.matches ) {
            lbl.tabIndex = 1;
            lbl.onclick = function () {
                this.blur();
            }
            lbl.onkeydown = function (e) {
                if ( e.keyCode === 13 || e.keyCode === 32 ) {
                    document.querySelector("#nav-checkbox").click();
                    this.focus();
                }
            }
        } else {
            lbl.tabIndex = -1;
            lbl.onkeydown = function (e) {
                return false;
            }
        }
        var s_img_width = window.getComputedStyle(startimg, null).width;
        var s_img_height = window.getComputedStyle(startimg, null).height;
        ua.innerHTML += "W: "+ s_img_width;
        ua.innerHTML += "<br />H: "+ s_img_height;
        if ( s_img_width != s_img_height ) {
            startimg.style.height = ( parseInt(s_img_width, 0) * 0.804 ) + "px";
            ua.innerHTML += "<br />IMG fixed using JS";
            s_img_height = window.getComputedStyle(startimg, null).height;
            ua.innerHTML += "<br />H: "+ s_img_height;
        }
    }
}());

