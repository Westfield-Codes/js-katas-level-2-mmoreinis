// Don't Edit! Just copy and paste. 

/* Loops & Arrays Katas */

/* RANDOM STUDENT KATA:  */

/* Global Variables */
// Create an array called students, start empty. 
var students = [];
// Create an array called picked, start empty. 
var picked = [];

/* Function Main()
 * Set variable count to asking how many students there are.
 * Fill global array students by passing count as an argument to addStudents
 * Set gateKeeper = randStudent(), the ssName of a random student in the list
 * Set keymaster = randNewStudent(), sName of a different random student
 * Display gatekeeper sName and keymaster sName for this kata
 * @param = none
 * @return = none
 */

function main(){
    let count = prompt("How many students are here?");
    addStudents(count);
    let gateKeeper = randStudent(); // argument
    let keyMaster = randStudent();
    alert("Gatekeeper = " + gateKeeper + " and Keymaster = " + keyMaster);
}

/* Function addStudents(count)
 * Use the students array, nothing in it. 
 * Use a for loop to add student sNames to the students array.
 * The loop should run count number of times. 
 * @param = count {integer}
 * @return = none
 */
function addStudents(count){
    for (let student = 1; student <= count; student++){
        students.push(prompt("Next student?"));
    }
    console.log(students.toString());
}

/* Function randStudent()
 * Set student = random number, 0 to length of students array.
 * Set sName = element in students array at that random index.
 * Add sName to picked array. 
 * Return the sName of the random student
 * @param = count {integer}
 * @return = sName {string}
 */
 function randStudent(){ // parameter
    let student = Math.floor(Math.random()*students.length);
    let sName = students[student];
    students.splice(student);
    return sName;
 }

/* Function randNewStudent() (start with copy of randStudent)
 * Set student = 0, sName = "" and pickedYet = 0. 
 * Loop while pickedYet is not equal to -1
 * Set student = random number, 0 to length of students array.
 * Set sName = element in students array at that random index.
 * Set pickedYet = the index of that sName in the picked array. 
 * End the while loop.
 * Add sName to picked array.
 * Return the sName of the new random student
 * @param = none
 * @return = sName {string}
 */
function randNewStudent(){
    let student = 0;
    let pickedYet = 0; 
    let sName = "";
    while (pickedYet != -1){
        student = Math.floor(Math.random()*students.length);
        sName = students[student];
        pickedYet = picked.indexOf(sName);
    }
    picked.push(sName);
    return sName;
}
