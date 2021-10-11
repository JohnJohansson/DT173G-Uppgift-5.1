"use strict"
// main js file that consumes my webservice 

// vars connects to the index file

// print out the courses on the index screen 
let coursesEl = document.getElementById("printCourses");

// for the add courses button
let addCoursebtn = document.getElementById("addCourse");

// the four fields in the form so you can add more courses
let addCoursekode = document.getElementById("addKurskod");
let addCoursename = document.getElementById("addKursnamn");
let addProgression = document.getElementById("addProgression");
let addCourseplan = document.getElementById("addKursplan");

// event listener

// lodes in the courses with an event listener connects to the function get courses
window.addEventListener('load', getCourses);

// event listener for the add courses button
// by putting an extra function and adding prevent defult we can stop the
// form from reloding the page, a defult form relodes the page
// stoping all the code from having time to run making the code not work as intended.
addCoursebtn.addEventListener('click', function (e) {
    e.preventDefault();
    addCourse();
});


//funktions -------

// connects to the api where the courses are stored
function getCourses() {
    coursesEl.innerHTML = "";
    // the link to the api
    fetch('http://studenter.miun.se/~tijo1901/DT173G/moment%205.1/api.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(course => {
                // prints out our courses into a tabel
                // target blank for the webblinks 
                // a button to erase a course in the bottom
                // we add an event on the onclick and connects it to the delete funktion
                coursesEl.innerHTML +=
                    `<tr><td>${course.kursnamn}</td>
                    <td>${course.kurskod}</td>
                    <td>${course.progression}</td>
                    <td><a href="${course.kursplan}"target="_blank">Webblänk</a></td>
                    <td><button id="${course.id}" onClick="deleteCourse(event, ${course.id})">Radera</button></td>
                    </tr>`;

            })
        })
}
// function for deleting courses 
// we add the event from the delete button
function deleteCourse(event, id) {
    // we give the event a prevent defult so delete wont relode the page.
    event.preventDefault();
    fetch('http://studenter.miun.se/~tijo1901/DT173G/moment%205.1/api.php?id=' + id, {
        // using metod delete
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        // a catch checking for errors
        .catch(error => {
            console.log('error ', error);
        })
}

// function for adding courses
function addCourse() {
    // vars connecting back to the database
    let kode = addCoursekode.value;
    let name = addCoursename.value;
    let progress = addProgression.value;
    let plan = addCourseplan.value;

    let kurs = { 'kurskod': kode, 'kursnamn': name, 'progression': progress, 'kursplan': plan }
    // another link to the api
    fetch('http://studenter.miun.se/~tijo1901/DT173G/moment%205.1/api.php', {
        // using metod post
        method: 'POST',
        // makes sure to turn them into a json format before sending them to the api
        body: JSON.stringify(kurs),
    })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        // a catch checking for errors
        .catch(error => {
            console.log('error ', error);
        })

    //after we run through all code we give back the forms fields empty values
    // So they wont retain the previusly inputed information
    addCoursename.value = ""
    addProgression.value = "";
    addCoursekode.value = "";
    addCourseplan.value = "";
}