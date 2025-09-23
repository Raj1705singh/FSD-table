let students = [
  { name: 'raj', subject: 'Maths', marks: 98 },
  { name: 'anand', subject: 'Science', marks: 95 },
  { name: 'arav', subject: 'English', marks: 92 },
  { name: 'amit', subject: 'History', marks: 80 },
  { name: 'ashish', subject: 'Computer', marks: 85 },
  { name: 'rajarshi', subject: 'Maths', marks: 76 }
];

function renderTable() {
  const tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = "";
  students.forEach(s => {
    let row = `<tr>
                 <td>${s.name}</td>
                 <td>${s.subject}</td>
                 <td>${s.marks}</td>
               </tr>`;
    tbody.innerHTML += row;
  });
  document.getElementById("total").textContent = students.length;
}

function showHighest() {
  if (students.length === 0) return;
  let highest = students.reduce((max, s) => s.marks > max.marks ? s : max);
  document.getElementById("message").textContent =
    `Highest: ${highest.name} (${highest.subject}) - ${highest.marks}`;
}

function showAverage() {
  if (students.length === 0) return;
  let avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;
  document.getElementById("message").textContent = 
    `Average Marks: ${avg.toFixed(2)}`;
}

function sortByMarks() {
  students.sort((a, b) => b.marks - a.marks);
  renderTable();
  document.getElementById("message").textContent = 
    "Sorted students by marks (highest → lowest)";
}

function resetSample() {
  students = [
    { name: 'raj', subject: 'Maths', marks: 98 },
    { name: 'anand', subject: 'Science', marks: 95 },
    { name: 'arav', subject: 'English', marks: 92 },
    { name: 'amit', subject: 'History', marks: 80 },
    { name: 'ashish', subject: 'Computer', marks: 85 },
    { name: 'rajarshi', subject: 'Maths', marks: 76 }
  ];
  renderTable();
  document.getElementById("message").textContent = "Sample data reset!";
}

function removeLast() {
  students.pop();
  renderTable();
  document.getElementById("message").textContent = "Removed last student!";
}

function addStudent() {
  let name = document.getElementById("studentName").value.trim();
  let subject = document.getElementById("studentSubject").value;
  let marks = parseInt(document.getElementById("studentMarks").value);

  if (!name || !subject || isNaN(marks)) {
    alert("Enter valid student name, subject, and marks!");
    return;
  }

  students.push({ name, subject, marks });
  renderTable();

  document.getElementById("studentName").value = "";
  document.getElementById("studentSubject").value = "";
  document.getElementById("studentMarks").value = "";

  document.getElementById("message").textContent = 
    `Added ${name} (${subject}) - ${marks}!`;
}

renderTable();
