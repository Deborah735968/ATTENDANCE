    const attendanceForm =
    document.getElementById('attendanceForm');
    const nameInput =
    document.getElementById('studentName');
    const matricInput =
    document.getElementById('matricNumber');
    const courseSelect =
    document.getElementById('course');
    const statusSelect =
    document.getElementById('status');
    const attendanceList =
    document.getElementById('attendanceList');



    let listText = [];

    attendanceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let studentName = nameInput.value.trim();
        let matricNumber = matricInput.value.trim();
        let course = courseSelect.value;
        let status = statusSelect.value;
        
        if (studentName !== '' && matricNumber !=='' && course !== '' && status  !==''){
            const list =
            {student:studentName, matric: matricNumber, 
                course: course, status: status 
            };
            listText.push(list);

            const newName = document.createElement('li');
            newName.textContent = `${studentName} - ${matricNumber} - ${course} - ${status}`;
            attendancelist.appendChild(newName);
            
        
        }
    }) 
