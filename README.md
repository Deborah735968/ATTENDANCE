
    Problem I Am Solving

    In a classroom, keeping track of students attendance manually using paper is slow, 
    So i think of designing a simple web-based attendance system where a lecturer can quickly

    Enter a student’s name and matric number
    Select the course and attendance status (Present or Absent)
    Instantly display all submitted attendance records on the page




    How I Solved It

    I solved the problem using HTML, Tailwind CSS, and JavaScript.

    HTML Form for Data Input

    I created an input form where the lecturer types

    Student name
    Matric number
    Course (from a dropdown menu)
    Attendance status (Present or Absent)

    When the lecturer clicks Add Attendance, the form sends the information to my Js.



    I used JS for the form submission:

    It first prevents the page from reloading when the form is submitted.
    It collects the data from all input fields (name, matric, course, and status).
    It checks if all fields are filled.
    It stores each record (as an object) inside an array called listText.
    Then it displays the new record instantly on the page.


    Display of Attendance
    My code adds each student’s record as a styled list item using the <ul> element.
    Each new entry is displayed with

    The student’s name and matric number
    The course attended




    This makes it easy to quickly identify which students are present or absent.



    So each time the lecturer submits a new record

    The new student is added to the list automatically
    The form resets for the next entry
    


