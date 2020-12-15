let allStudent = [
  {name: `Tim Berners-Lee`, grade: 80},
  {name: `Ada Lovelace`, grade: 83},
  {name: `Grace Hopper`, grade: 72},
  {name: `Alan Turing`, grade: 52}
]
// console.table(students)

let records = document.getElementById(`records`) // <ol>


/*
// ADD/REMOVE FROM AN ARRAY

push()  // add to the end
unshift()  // add to the beginning
pop()  // remove the last item
shift() // remove from first item
*/


let printAllStudents = function(table) {
  // Inline define the function annonymously
  table.forEach((student) => {
    // Create a li to hold each student record
    let listItem = document.createElement(`li`)  // <li></li>
    listItem.textContent = `${student.name}: ${student.grade}%`
    listItem.className = `student`

    records.append(listItem)
  })
}

printAllStudents(allStudent)

// Filter to print only students at risk of failing
// Toggle between all students and "at risk" students with a button
















/* let searchForTom1 = function(drum) {
  return drum.eleId === `kick`
}

// Search an array for an element
let whatWasFound = sounds.find(drum => drum.eleId === `kick`)
console.log(whatWasFound)
 */
