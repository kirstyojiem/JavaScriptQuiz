console.log("executing javascript")
// $("#prospects_form").submit(function(e) {
// e.preventDefault();
// });
const submitAnswers = (e) => {

var submittedAnswers = [q1, q2, q3, q4];
var answers = ["1a","2b","3b","4c"];

var total = answers.length;
var score = 0;

var q1 = document.forms["quizForm"]["q1"].value;
var q2 = document.forms["quizForm"]["q2"].value;
var q3 = document.forms["quizForm"]["q3"].value;
var q4 = document.forms["quizForm"]["q4"].value;

console.log("answer q1: ", typeof q1); 



for(i = 0; i <= 4; i++) {
    submittedAnswers[i] = "q" + submittedAnswers[i];
    console.log(submitAnswers[i])
    if(submittedAnswers[i] == answers[i]) {
        score++;
    }
}





//on submit -> wgere are the answer stored

var results = document.getElementById('results');
results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
return false;
}