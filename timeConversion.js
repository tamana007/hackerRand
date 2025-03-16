
// const readlineSync = require('readline-sync');
// function timeConversion(t){
//   const period=t.slice(-2);
//   const hour=parseInt(t.slice(0,2),10);
//   const minute=parseInt(t.slice(3,5),10);
//   const second=parseInt(t.slice(6),10);

//   if(
//     period='PM'
    
//   ){
//     if(
//       hour=12
//     ){
// hour=0;
//     }

//   }
//   else if (
//     period='AM'
//   ){
// if(hour!=12){
//   hour+=12;
// }
//   }


  
//   const militraHour=hour.toString().padStart(2,'0');
//   return `${militraHour}: ${minute}:${second};`
// }

const readlineSync = require('readline-sync');

// Function to convert 12-hour AM/PM time to 24-hour military time
function timeConversion(s) {
    const period = s.slice(-2); // Get the last two characters (AM/PM)
    let hour = parseInt(s.slice(0, 2), 10); // Get the hour part and convert to integer
    const minute = s.slice(3, 5); // Get the minute part
    const second = s.slice(6, 8); // Get the second part

    // Convert based on AM/PM
    if (period === "AM") {
        if (hour === 12) {
            hour = 0; // Midnight case (12 AM -> 00)
        }
    } else if (period === "PM") {
        if (hour !== 12) {
            hour += 12; // Add 12 for PM hours (except 12 PM)
        }
    }

    const militaryHour = hour.toString().padStart(2, '0'); // Ensure 2-digit hour format
    return `${militaryHour}:${minute}:${second}`;
}

// Get user input
const userInput = readlineSync.question('Enter time in 12-hour AM/PM format (e.g., 07:05:45PM): ');

// Convert and display the result
const result = timeConversion(userInput);
console.log(`Military time: ${result}`);
