"use strict";var coursesEl=document.getElementById("printCourses"),addCoursebtn=document.getElementById("addCourse"),addCoursekode=document.getElementById("addKurskod"),addCoursename=document.getElementById("addKursnamn"),addProgression=document.getElementById("addProgression"),addCourseplan=document.getElementById("addKursplan");function getCourses(){coursesEl.innerHTML="",fetch("https://studenter.miun.se/~tijo1901/writeable/w5/api.php").then((function(e){return e.json()})).then((function(e){e.forEach((function(e){coursesEl.innerHTML+="<tr><td>".concat(e.kursnamn,"</td>\n                    <td>").concat(e.kurskod,"</td>\n                    <td>").concat(e.progression,'</td>\n                    <td><a href="').concat(e.kursplan,'"target="_blank">Webblänk</a></td>\n                    <td><button id="').concat(e.id,'" onClick="deleteCourse(event, ').concat(e.id,')">Radera</button></td>\n                    </tr>')}))}))}function deleteCourse(e,n){e.preventDefault(),fetch("https://studenter.miun.se/~tijo1901/writeable/w5/api.php?id="+n,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){getCourses()})).catch((function(e){console.log("error ",e)}))}function addCourse(){var e={kurskod:addCoursekode.value,kursnamn:addCoursename.value,progression:addProgression.value,kursplan:addCourseplan.value};fetch("https://studenter.miun.se/~tijo1901/writeable/w5/api.php",{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){getCourses()})).catch((function(e){console.log("error ",e)}))}function toggle(){var e=document.getElementById("hamburgerMenuID");"block"===e.style.display?e.style.display="none":e.style.display="block"}window.addEventListener("load",getCourses),addCoursebtn.addEventListener("click",(function(e){e.preventDefault(),addCourse(),addCoursekode.value="",addCoursename.value="",addProgression.value="",addCourseplan.value=""})),console.log("Hello gulp! From one.js"),console.log("Hello gulp from two.js");