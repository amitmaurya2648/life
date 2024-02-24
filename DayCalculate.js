class Dates
{ 
    constructor(d,m,y) 
    { 
        this.d = d; 
            this.m = m; 
            this.y = y; 
    } 
} 
  
// To store number of days in 
    // all months from January to Dec. 
let monthDays=[31, 28, 31, 30, 31, 30, 
                            31, 31, 30, 31, 30, 31]; 
// This function counts number of 
    // leap years before the given date                             
function countLeapYears(d) 
{ 
    let years = d.y; 
   
        // Check if the current year needs to be considered 
        // for the count of leap years or not 
        if (d.m <= 2) 
        { 
            years--; 
        } 
   
        // An year is a leap year if it is a multiple of 4, 
        // multiple of 400 and not a multiple of 100. 
        return Math.floor(years / 4) - Math.floor(years / 100) + 
        Math.floor(years / 400); 
} 
  
// This function returns number 
    // of days between two given dates 
function getDifference(dt1,dt2) 
{ 
// COUNT TOTAL NUMBER OF DAYS BEFORE FIRST DATE 'dt1' 
   
        // initialize count using years and day 
        let n1 = dt1.y * 365 + dt1.d; 
   
        // Add days for months in given date 
        for (let i = 0; i < dt1.m - 1; i++) 
        { 
            n1 += monthDays[i]; 
        } 
   
        // Since every leap year is of 366 days, 
        // Add a day for every leap year 
        n1 += countLeapYears(dt1); 
   
        // SIMILARLY, COUNT TOTAL NUMBER OF DAYS BEFORE 'dt2' 
        let n2 = dt2.y * 365 + dt2.d; 
        for (let i = 0; i < dt2.m - 1; i++) 
        { 
            n2 += monthDays[i]; 
        } 
        n2 += countLeapYears(dt2); 
   
        // return difference between two counts 
        return (n2 - n1); 
} 
  
 // Driver code 
let dt1 = new Dates(27, 2, 1998); 
let today = new Date();
let dt2 = new Dates(today.getDate(), today.getMonth()+1, today.getFullYear()); 
let diff = getDifference(dt1, dt2);
document.getElementById('diff').innerHTML=diff.toLocaleString();
let sleepCount= Math.floor(diff/3);
 document.getElementById('sleepCount').innerHTML = sleepCount.toLocaleString();
 let populationCount = diff*199280;
 document.getElementById('popCount').innerHTML = populationCount.toLocaleString();

function heartbeatsFunc(){
    let today = new Date();
    let heartBeats = diff*24*60*75;
    let hourbeats = today.getHours()*60*75;
    let minBeats = today.getMinutes()*75;
    let secBeats = today.getSeconds()*1.25;
    
    let TotalBeats = Math.floor(heartBeats+ hourbeats + minBeats + secBeats);
    document.getElementById('heartBeats').innerHTML = TotalBeats.toLocaleString();

    let bloodPump = Math.floor(TotalBeats * 0.0007692307172);
    document.getElementById('heartPump').innerHTML = bloodPump.toLocaleString();
} 
setInterval(heartbeatsFunc, 1000);
function rbcFunc(){
    let today = new Date();
    let rbcpm = 138710600;
    let rbcday = diff*24*60*rbcpm;
    let rbchour = today.getHours()*60*rbcpm;
    let rbcmin = today.getMinutes()*rbcpm;
    let rbcsec = today.getSeconds()*rbcpm/60;
    let totalrbc = Math.floor(rbcday+rbchour+rbcmin+rbcsec);
    document.getElementById('rbccount').innerHTML = totalrbc.toLocaleString();
}
setInterval(rbcFunc, 10);

function breathFunc(){
    let today = new Date();
    let breathpm = 13.89;
    let totalbreath = Math.floor((diff*24*60+today.getHours()*60+today.getMinutes()+today.getSeconds()/60)*breathpm);
    document.getElementById('breathCount').innerHTML = totalbreath.toLocaleString();
}
setInterval(breathFunc, 1000)

function blinkFunc(){
    let today = new Date();
    let blinkpm = 15;
    let totalblink = Math.floor((diff*24*60+today.getHours()*60+today.getMinutes()+today.getSeconds()/60)*blinkpm);
    document.getElementById('blinkCount').innerHTML = totalblink.toLocaleString();
}

setInterval(blinkFunc,100)

function earthTravelFunc(){
    let today = new Date();
    let earthpm =1805.4125;
    let totaleartTravel = Math.floor((diff*24*60+today.getHours()*60+today.getMinutes()+today.getSeconds()/60)*earthpm);
    document.getElementById('earthTravel').innerHTML = totaleartTravel.toLocaleString();
}
setInterval(earthTravelFunc,100)
function galaxyTravelFunc(){
    let today = new Date();
    let galaxypm =13798.903;
    let totalgalaxyTravel = Math.floor((diff*24*60+today.getHours()*60+today.getMinutes()+today.getSeconds()/60)*galaxypm);
    document.getElementById('galaxyTravel').innerHTML = totalgalaxyTravel.toLocaleString();
    console.log(totalgalaxyTravel.toLocaleString());
}
setInterval(galaxyTravelFunc,100)