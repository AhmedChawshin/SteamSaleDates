window.onload = start;

function start() {


}

// create an XHR object
const xhr = new XMLHttpRequest();

// listen for `onload` event
xhr.onload = () => {
    // process response
    if (xhr.status == 200) {
        // parse JSON data
        console.log(JSON.parse(xhr.response));
        var information = JSON.parse(xhr.response);

        var status = undefined;
        if (information.confirmed === true) {
            status = "(confirmed)";
        } else {
            status = "(unconfirmed)";
        }

        //eventname
        document.getElementById("event").innerHTML = information.eventname;
        document.getElementById("status").innerHTML = status;
        //date of steam sale
        document.getElementById("nextsale").innerHTML = "Next steam sale is " + information.date;

        // Set the date we're counting down to
        var dates = information.countdown;
        var countDownDate = new Date(dates).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            // Output the result in an element with id="demo"
            document.getElementById("Countdowndate").innerHTML = "in " + days + " days, " + hours + " hours, " +
                minutes + " minutes";
                nextsale
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("Countdowndate").innerHTML = "Enjoy the steam sale";
                document.getElementById("nextsale").innerHTML = "<span class='rainbow'>STEAM SALE IS LIVE!</span>";
            }
        }, 1000);


    } else {
        console.error('Error!');
    }
};

// create a `GET` request
xhr.open('GET', 'data.json');

// send request
xhr.send();