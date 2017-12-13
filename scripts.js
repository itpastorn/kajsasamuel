(function () {
    if ( document.getElementById("days") ) {
        var edays   = document.getElementById("days"),
            ehours  = document.getElementById("hours"),
            emins   = document.getElementById("minutes"),
            esecs   = document.getElementById("seconds"),
            ednoun  = document.getElementById("daynoun"),
            ehnoun  = document.getElementById("hournoun"),
            emnoun  = document.getElementById("minnoun"),
            esnoun  = document.getElementById("secnoun"),
            counter = document.getElementsByClassName("counter")[0],
            onlybefore = document.getElementsByClassName("onlybefore");

        function countDown() {
            var seconds = Math.round((Date.UTC(2015,7,15,12) - Date.now())/1000);
            // Test
            // var seconds = Math.round((Date.UTC(2015,7,14,15) - Date.now())/1000);
            if ( seconds < -1800 ) {
                counter.innerHTML = "Nu är vi gifta!";
                counter.classList.remove("inprogress");
                counter.classList.add("married");
                onlybefore[0].classList.add("removed");
                onlybefore[1].classList.add("removed");
                return false;
            }
            if ( seconds < 0 ) {
                counter.innerHTML = "Nu gifter vi oss!";
                counter.classList.add("inprogress");
                onlybefore[0].classList.add("removed");
                onlybefore[1].classList.add("removed");
                setTimeout(countDown, 2000);
                return true;
            }
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
            setTimeout(countDown, 200);
        }
        countDown();
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
    }
}());

