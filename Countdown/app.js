const endDate = "20 January 2024 10:00 PM";
console.log(endDate);
document.getElementById('end-date').innerHTML = endDate;
const inputs = document.querySelectorAll("input")

 function clock(){
     const end = new Date(endDate);
     const now = new Date();
     const deff = (end-now)/1000;
     if(deff < 0)return;  
     // convert intyo days;
     inputs[0].value = Math.floor(deff / 3600 / 24); // (82614.27 / 3600 / 24 = 0.95 convert into floor = 1)
     // convert intyo Hours;
     inputs[1].value = Math.floor(deff / 3600) % 24; // (82614.27 / 3600 % 24 = 22.293654444444442 convert into floor = 22)
     // convert intyo Minutes;
     inputs[2].value = Math.floor(deff / 60 ) % 60; // (82614.27 / 60 % 60 = 16.32910000000038 convert into floor = 16)
     // convert intyo Seconds;
     inputs[3].value = Math.floor(deff) % 60;       // (82614.27 % 24 = 57.880999999993946 convert into floor = 58)
     

 }


clock();

setInterval(
    function(){
        clock()
    },
    1000
);





/* Data
 deff = 82803195/1000 = 82614.27 miliseconds;
 1 day = 24 hrs ;
 1 hrs = 60 mins ;
 60 mins = 3600 sec ;
 */


//  const endDate = "20 January 2024 10:00 PM";
// document.getElementById('end-date').innerHTML = endDate;
// const inputs = document.querySelectorAll("input")

// const clock = () => {
//     const end = new Date(endDate);
//     const now = new Date();
//     const deff = (end-now)/1000;
//     if(deff < 0)return;  
//     // convert intyo days;
//     inputs[0].value = Math.floor(deff / 3600 / 24); //
//     // convert intyo Hours;
//     inputs[1].value = Math.floor(deff / 3600) % 24;
//     // convert intyo Minutes;
//     inputs[2].value = Math.floor(deff / 60 ) % 60;
//     // convert intyo Seconds;
//     inputs[3].value =Math.floor(deff) % 60;;

// }

// clock();

// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )
