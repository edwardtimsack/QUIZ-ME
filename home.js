let mains = document.querySelectorAll(".courses");
let courses = document.querySelectorAll("#category div span");

courses.forEach( function(courses) {
    courses.addEventListener('click', function() {
        window.location.href = "questions.html";
    })
})

















// var categories = document.querySelectorAll("#category");
// Array.from(categories).forEach(function(){
// categories.addEventListener('click' , function(){
//         // categories.style.backgroundColor = "red";
// })
// console.log("HELLO");

// })

// let link = document.querySelector(".main a");
// link.addEventListener('click', function(e){
//     // console.log("hello")y
//     link.style.backgroundColor = "gold";
//     // click.style.color = 'green';
//     e.preventDefault();
//     console.log('navigation to ', e.target.textContent, 'was prevented')
// })

