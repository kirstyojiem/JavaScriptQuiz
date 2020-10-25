var myscore = 0;
var missed = 0;
var answered = 0;

var question1 = document.getElementById("myCheck");
var myl = document.getElementById("myCheck1");
var myl2 = document.getElementById("myCheck2");
var myl3 = document.getElementById("myCheck3");

var array1 = [myl, myl1, myl2, myl3];

function myFunction() {
    
    for (i=0; i<=array1. length;i++) {
        if (array1[i].checked == true) {
            myscore += 1;
        }

        var obtained = myscore;
        var total = 4;
        var percent = obtained*100/total;
        var finalscore = percent+ "%";

        document.getElementById("demo").innerHTML = "You scored " + myscore + "Out of 4." +" <b>Grade:</b>"+ finalscore;
            document.querySelector(".finalscore").className += "hide";
    
    }
    function uncheck() {

        for (i=0; i<array1.lengt;i++) {
            if (array1[i].checked == false) {
                missed += 1;
            }
            document.getElementById("missed").innerHTML = "you missed" + missed + "Out of 4";
            document.querySelector(".unchecked").className += "hide";
        }
    }
}