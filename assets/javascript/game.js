var key = [
    ["Krypton is an element?", "t"],
    ["Philately is the study of flags.", "f"],
    ["Michael Jordan played baseball professionally.", "t"],
    ["The TV show M*A*S*H first broadcast without a laugh track in the UK.", "t"],
    ["Oprah Winfrey's production company shares a name with a Marx brother", "t"],
    ["Prometheus Bound was written by Dante.", "f"],
    ["Stefani Joanne Angelina Germanotta is also known as Lady Gaga.", "t"],
    ["Dan Brown wrote The Lost Symbol before The Da Vinchi Code.", "f"],
    ["Roadrunner is a real bird.", "t"],
    ["Black-eyed peas are a type of beans.", "t"]
];

var remain = 300;

var minutes = Math.floor((remain % (60 * 60)) / (60));
var s = Math.floor((remain % (60)) / (60));
var seconds = String("0" + s).slice(-2);
var correct = 0;
var incorrect = 0;

var q = 0;

var text = window.location.hash.substring(1);




function end() {
    var score = "Correct: " + correct + "<br><br>Incorrect: " + incorrect;
    window.open('result.html#' + score, '_self', false);
}


$(document).ready(function() {

    $("#timer").html("5:00");


    function time() {
        remain--;
        minutes = Math.floor((remain % (60 * 60)) / (60));
        seconds = String("0" + Math.floor(remain % (60))).slice(-2);

        $("#timer").html(minutes + ":" + seconds);
        if (remain === 0) {
            end();
        }
    }
    var countDown = setInterval(time, 1000);

    setTimeout(end, 300000);

    $("#score").html(text);


    function result() {
        $("#question").html("");
        $("#answer").html("");
        if (choice === key[q][1]) {
            $("#answer").html("Correct!");
            correct++;
        } else {
            $("#answer").html("Incorrect!");
            incorrect++;
        }
        q++;
        if (key[q] === undefined) {
            end();
        }
        setInterval(next, 2000);
    }

    function next() {

        $("#question").html(key[q][0]);
        $("#answer").html('<button id="true" class="ui-button ui-widget ui-corner-all">True</button><button id=false class="ui-button ui-widget ui-corner-all">False</button>');




        $("#true").click(function() {
            choice = "t";
            result();
        });
        $("#false").click(function() {
            choice = "f";
            result();
        });
    }

    next();



});
