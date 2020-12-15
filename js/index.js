let allStudents = [
  {name: `Tim Berners-Lee`, grade: 80},
  {name: `Ada Lovelace`, grade: 83},
  {name: `Grace Hopper`, grade: 72},
  {name: `Alan Turing`, grade: 52}
]
// console.table(students)

let records = document.getElementById(`records`) // <ol>
let results = document.getElementById(`results`)

/*
// ADD/REMOVE FROM AN ARRAY

push()  // add to the end
unshift()  // add to the beginning
pop()  // remove the last item
shift() // remove from first item
*/


let printStudentTable = function(table) {
  // Clear the ordered list
  records.innerHTML = ``  // This is a non-elegant way to clear a list

  // Inline define the function annonymously
  table.forEach((student) => {
    
    // Create a li to hold each student record
    let listItem = document.createElement(`li`)  // <li></li>
    listItem.textContent = `${student.name}: ${student.grade}%`
    listItem.className = `student`

    records.append(listItem)
  })

  results.textContent = `Displaying records for ${table.length} students`
}

// Print all students
printStudentTable(allStudents)




// Filter to print only students at risk of failing

// Iterates over each record, accumulating matching records into an Array in memory, then returns the array when complete
let atRiskStudents = allStudents.filter((student) => student.grade < 60)
printStudentTable(atRiskStudents)



// Toggle between all students and "at risk" students with a button
















/* let searchForTom1 = function(drum) {
  return drum.eleId === `kick`
}

// Search an array for an element
let whatWasFound = sounds.find(drum => drum.eleId === `kick`)
console.log(whatWasFound)
 */
