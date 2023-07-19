let courses = document.querySelectorAll(".courses");
let coursesTitle = document.querySelectorAll(".courses span");
let firstCourse = document.querySelectorAll("#first");
let secondCourse = document.querySelectorAll("#second");
let thirthCourse = document.querySelectorAll("#thirth");
let fourCourse = document.querySelectorAll("#fourth");


firstCourse.forEach( function(firstCourse) {
    // console.log("hello");
    firstCourse.addEventListener('click', function() {
        window.location.href = "gitQuestions.html";
    })
});

secondCourse.forEach( function(secondCourse) {
    // console.log("hello");
    secondCourse.addEventListener('click', function() {
        window.location.href = "htmlQuestions.html";
    })
});

thirthCourse.forEach( function(thirthCourse) {
    // console.log("hello");
    thirthCourse.addEventListener('click', function() {
        window.location.href = "cssQuestions.html";
    })
});

fourCourse.forEach( function(fourCourse) {
    // console.log("hello");
    fourCourse.addEventListener('click', function() {
        window.location.href = "javaScriptQuestions.html";
    })
});


// let courseValue = "";
// courses.forEach(function(coursesTitle){
//     coursesTitle = courses.lastElementChild.innerText;
//     localStorage.setItem("coursesTitle", courseValue);
//     if (courseValue.toLowerCase() === "html") {
//         window.location.href = 'htmlQuestions.html';
//     }
//     else if (subjectValue.toLowerCase() === "css") {
//         window.location.href = 'cssQuestions.html';
//     }
//     else if (subjectValue.toLowerCase() === "javascript") {
//         window.location.href = 'javaScriptQuestions.html';
//     }
//     else if (subjectValue.toLowerCase() === "git") {
//         window.location.href = 'gitQuestions.html';
//     }
// })
// let courseOutput = "";
// courses.forEach(function (coursesTitle) {
//     coursesTitle.addEventListener('click', function () {
//         console.log("hello");
//         courses.style.backgroundColor = "red";
//         courseOutput = coursesTitle.lastElementChild.innerText;
//         localStorage.setItem("coursesTitle", courseOutput);
//         if (courseOutput.toLowerCase() === "git") {
//             window.location.href = 'gitQuestions.html';
//         }
//         else if (courseOutput.toLowerCase() === "css") {
//             window.location.href = 'cssQuestions.html';
//         }
//         else if (courseOutput.toLowerCase() === "javascript") {
//             window.location.href = 'javaScriptQuestions.html';
//         }
//     })
// })