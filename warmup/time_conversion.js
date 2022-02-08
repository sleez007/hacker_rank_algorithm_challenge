// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {
    // Write your code here
    const ext = s.slice(s.length-2, s.length);
    const isPm = ext == "PM";
    const oldTimeArray = s.split(':');
    let time = "";
    
    if(isPm){
        if( parseInt(oldTimeArray[0]) == 12){
            time =  s.slice(0, s.length-2 )
        }else{
            let h = parseInt(oldTimeArray[0]) + 12;
            time = h + s.slice(2,s.length-2 )
        }
        
    }else{
        
       if( parseInt(oldTimeArray[0]) == 12){
            time =  "00"+ s.slice(2, s.length-2 )
        }else{
            time = s.slice(0, s.length-2 )
        }
        
    }
    
    return time;

}

console.log(timeConversion('01:00:00AM'));