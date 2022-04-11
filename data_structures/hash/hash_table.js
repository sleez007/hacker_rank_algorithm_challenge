function HashTable(){
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}


function get(key){
    return this.table[this.betterHash(key)]
}

//add a new entry into the table
function put(key, data){
    const pos = this.betterHash(key);
    this.table[pos] = data;
}

function showDistro() { 
    var n=0;
    for (var i = 0; i < this.table.length; ++i) { 
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]); 
        }
    } 
}



//A simple hash function for the hashtable
//It is used to generate the index of every key passed in
//Sums up the hash value of the ASCII character
function simpleHash(data){
    var total = 0;

    for(let i = 0; i < data.length; ++i ){
        total+= data.charCodeAt(i);
    }

    return total % this.table.length;
}

//A better hash function for the hashtable
//It is used to generate the index of every key passed in
//Sums up the hash value of the ASCII character
function betterHash(string){
    var total = 0;
    const h = 37;

    for(let i = 0; i < string.length; ++i ){
        total+= h * total + string.charCodeAt(i);
    }

    total = total % this.table.length;

    return parseInt(total);
}






//Test
// var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; 
// var hTable = new HashTable();
// for (var i = 0; i < someNames.length; ++i) {
//     hTable.put(someNames[i]);
// }
// hTable.showDistro();




// function getRandomInt (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function genStuData(arr) {
//     for (var i = 0; i < arr.length; ++i) {
//         var num = ""; 
//         for(var j=1;j<=9;++j){
//              num += Math.floor(Math.random() * 10);
//         }
//           num += getRandomInt(50,100);
//           arr[i] = num;
//     }
//     console.log('total is '+ i)
// }

// var numStudents = 10; 
// //var arrSize = 97; 
// //var idLen = 9;
// var students = new Array(numStudents); 
// genStuData(students);
// console.log("Student data: \n");
// for (var i = 0; i < students.length; ++i) {
//     console.log(students[i].substring(0,8) + " " +
//             students[i].substring(9));
// }
// console.log("\n\nData distribution: \n");
// var hTable = new HashTable();
// for (var i = 0; i < students.length; ++i) {
//     hTable.put(students[i]);
// }
// hTable.showDistro();




var pnumbers = new HashTable(); 
var nm, number; 
for(var i=0;i<3;i++){
    putstr("Enter a name (space to quit): ");
    nm = readline();
    putstr("Enter a number: ");
    number = readline();
}
nm = "";
putstr("Name for number (Enter quit to stop): "); while (nm != "quit") {
nm = readline(); if (nm == "quit") {
break; }
    print(nm + "'s number is " + pnumbers.get(nm));
    putstr("Name for number (Enter quit to stop): ");
 }
