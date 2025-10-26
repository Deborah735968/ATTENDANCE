 const attendanceForm = document.getElementById('attendanceForm');
const nameInput = document.getElementById('studentName');
const matricInput = document.getElementById('matricNumber');
const courseSelect = document.getElementById('course');
const statusSelect = document.getElementById('status');
const attendanceList = document.getElementById('attendanceList');

let listText = [];

attendanceForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let studentName = nameInput.value.trim();
  let matricNumber = matricInput.value.trim();
  let course = courseSelect.value;
  let status = statusSelect.value;

  if (studentName !== '' && matricNumber !== '' && course !== '' && status !== '') {
    const list = {
      student: studentName,
      matric: matricNumber,
      course: course,
      status: status
    };

    listText.push(list);
    loadData();
  } 
});

function loadData() {
  let index = listText.length;
  const newName = document.createElement('li');

  newName.textContent = `${listText[index-1].student} - ${listText[index-1].matric} - ${listText[index-1].course} - ${listText[index-1].status}`;

  attendanceList.appendChild(newName);
  attendanceForm.reset();
}