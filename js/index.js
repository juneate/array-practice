let allStudents = [
  {name: `Tim Berners-Lee`, grade: 80},
  {name: `Ada Lovelace`, grade: 83},
  {name: `Grace Hopper`, grade: 72},
  {name: `Alan Turing`, grade: 52}
]
// console.table(students)

let records = document.getElementById(`records`) // <ol>
let results = document.getElementById(`results`) // <footer>
let atRisk = document.getElementById(`atRisk`)   // <input type="checkbox">

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


// Filter to print only students at risk of failing
let filterForAtRiskStudents = function(event) {

  if (event.target.checked) {
    // Iterates over each record, accumulating matching records into an Array in memory, then returns the array when complete
    let atRiskStudents = allStudents.filter((student) => student.grade < 60)
    printStudentTable(atRiskStudents)
  } else {
    printStudentTable(allStudents)
  }

}




// Toggle between all students and "at risk" students with a button
atRisk.addEventListener(`change`, filterForAtRiskStudents)

// Print all students to start
printStudentTable(allStudents)
