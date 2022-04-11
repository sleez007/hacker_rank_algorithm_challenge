function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = ""; 
        for(varj=1;j<=9;++j){
             num += Math.floor(Math.random() * 10);
        }
          num += getRandomInt(50,100);
          arr[i] = num;
    }
}

load("hash_table"); 
var numStudents = 10; var arrSize = 97; var idLen = 9;
var students = new Array(numStudents); 
genStuData(students);
console.log("Student data: \n");
for (var i = 0; i < students.length; ++i) {
    console.log(students[i].substring(0,8) + " " +
            students[i].substring(9));
}
console.log("\n\nData distribution: \n");
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
    hTable.put(students[i]);
}
hTable.showDistro();