console.log("executing javascript")
// $("#prospects_form").submit(function(e) {
// e.preventDefault();
// });
const submitAnswers=(e)=>{
e.preventDefault();   
console.log("submit answers")

var total = 0;
var score = 0;
console.log(document.forms)
// var q1option = document.forms["quizForm"]["q1"].value;
// console.log("q1",q1option)
// var q2option = document.forms["quizForm"]["q2"].value;
// var q3option = document.forms["quizForm"]["q3"].value;
// var q4option = document.forms["quizForm"]["q4"].value;

// var answers = ["1a","2b","3b","4c"];
// for(i=1; i<=total; i++) {
//     if(eval('q'+i)=== answers[i-1]) {
//         score++;
//     }
// }

var results = document.getElementById('results');
results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
return false;
}