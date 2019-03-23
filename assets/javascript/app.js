$(".btnStart").on("click", start);

function start() {
    

var time = 60;
var interval = setInterval(function() {
    time--;

    if (time <= 0) {
     		clearInterval(time);
      	$('#timer').text("60");    // something here!!!!!!!!!!!!!!!!!!!!!!!
        return;
    }else{
    	$('#time').text(interval);

      $("#timer").text(time);
    }
}, 1000);

}
// ***************************************************************************************************************************************
// Need to create toggle for each set of Qs and As


// ************original code\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\


// var cor = 0;
// var wro = 0;


// $("#whichkey").on("mousedown", function(event) {
//     if ($("#right").text("Correct:" + event.which)); {
//     }
//         cor++;
                                                                            // P*O*S*S*I*B*L*E*   1

// $("#whichkey").on("mousedown", function(event) {
//     if ($("#wrong").text("Incorrect:" + event.which)); {
//     }
//         wro++; 
// }

// \/\/\/\/\/\/\/\/original code^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




// \/\/\/\/\/\/\/\/lightbulb change\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\


select();
    function select() {
        var cor = 0;
        var wro = 0;
        $("#whichkey").on("mousedown", function (event) {
            if ($("#right").text("Correct:" + event.which))
                ;
            {
                                                                                            // P*O*S*S*I*B*L*E*   2

            }
            cor++;
            $("#whichkey").on("mousedown", function (event) {
                if ($("#wrong").text("Incorrect:" + event.which))
                    ;
                {
                }
                wro++;
            });
        });
    }

// *********************lightbulb change **************^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



($(".button").on('click', score)); {

function score() {

    if ($(".button").click("#rightansw")); {
        cor++;
    }
                                                                                // P*O*S*S*I*B*L*E*   3


    if ($(".button").click("#wrongansw")); {                /* why doesn't 'else' work?? */
        wro++;
    }
}
}



// \/\/\/\/\/\/\/\/\/\/\/\will .click work better than .hasClass here?? \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\




function score() {

    if ($(".button").hasClass("#rightansw")); {
        cor++;
    }
                                                                            // P*O*S*S*I*B*L*E*   4

    if ($(".button").hasClass("#wrongansw")); {                
        wro++;
    }
}

// \/\/\/\/\/\/\/ Function to tell user question has already been anwered\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


if ($("#.button").is(score)) {
    alert("Answer already selected, next question");
}


// **********************NOTES******************************************

// * Are any of my code creations possibly working?
// * Where is the 2/60 coming from?

