var conuntDownDate = new Date("Jan 20, 2024 10:00 PM");
var X = setInterval( () => {
    var now = new Date();
    var distance = conuntDownDate - now;
    

    var days = Math.floor(distance/(1000*60*60*24));
    var Hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var Minites = Math.floor((distance % (1000*60*60)) / (1000*60));
    var Seconds = Math.floor((distance % (1000*60)) / (1000));

    document.getElementById("day").innerHTML = days;
    document.getElementById("Hour").innerHTML = Hours;
    document.getElementById("Minite").innerHTML = Minites;
    document.getElementById("Second").innerHTML = Seconds;

    if(distance < 0){
        clearInterval(X);
        document.getElementById("day").innerHTML = "00";
    document.getElementById("Hour").innerHTML = "00";
    document.getElementById("Minite").innerHTML = "00";
    document.getElementById("Second").innerHTML = "00";
    }
}
,1000
 );

//  1 day = 24 hrs ;
//  1 hrs = 60 mins ;
//  60 mins = 3600 sec ;
//   1 sec = 1000 milisec;