var countDown = new Date("Jan 22, 2024 00:00:00").getTime();
// console.log(countDown);
let X = setInterval( () => {
    var now = new Date();
    // console.log(now);
    var distance = (countDown - now) ;
    // console.log(distance);

    var days = Math.floor(distance /  1000 / 60 / 60 / 24); 
    //    console.log(days);
    var hours = Math.floor(distance /  1000 / 60 / 60 ) % 24; 
    //    console.log(hours);
    var minite = Math.floor(distance /  1000 / 60 ) % 60;
    //    console.log(minites);
    var second = Math.floor(distance /  1000 ) % 60;
    //    console.log(second);  


    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minite;
    document.getElementById("second").innerHTML = second;
    
    if(distance < 0){
        document.getElementById("day").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    }
}
,1000
);