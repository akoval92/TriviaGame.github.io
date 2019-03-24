

$(".btnStart").on("click", start);

function start() {

    var time = 60;
    setInterval(function () {
        time--;

        if (time <= 0) {
            clearInterval(time);
            $('#time').text("60");
            return;
        } else {
            $('#time').text(time);
        }
    }, 1000);

}


$(".btn").on("click", score);

var cor = 0;
var wro = 0;

function score() {

   

    if ($(this).hasClass("rightansw")); {
        cor++;
        // $("#cor").text("Correct:" + cor)
        console.log("Correct:" + cor)

    }
    if ($(this).hasClass("wrongansw")); {
        wro++;
        // $("#wro").text("Inorrect:" + wro)    }
        console.log("Inorrect:" + wro)    }
}

$(".btn").on("click", highlight);
