    // step - 170

    var userClickedPattern = [];
    var buttonColours = ['red', 'blue', 'green', 'yellow'];
    var gamePattern = [];
    var level = 0;
    var started = false;

    ///step - 176
    $(document).keydown(
        function () {
            if (!started) {
                $('#level-title').text('Level ' + level);
                started = true;
                sequence();
            }
        }
    )

    $(".btn").click(function () {

        var classes = $(this).attr('class').split(' ');
        var userChosenColour = classes[1];
        userClickedPattern.push(userChosenColour);
        console.log(userChosenColour);
        var audio = new Audio(userChosenColour + ".mp3");
        audio.play();
        animatePress($(this));
        checkAnswer(userClickedPattern.length - 1);
        
    });


    function sequence() {
        level++;
        $('#level-title').text('Level ' + level);
        randomChosenColour = buttonColours[Math.floor(4 * Math.random())];
        var self = $(this);

        $("." + randomChosenColour).animate({ opacity: '0.2' }, 10);
        $("." + randomChosenColour).animate({ opacity: 1 });
        gamePattern.push(randomChosenColour);
        var audio = new Audio(randomChosenColour + ".mp3");
        audio.play();
    };
    //creating sound player -step 172
    function animatePress(self) {
        self.addClass('pressed');
        setTimeout(function () {
            self.removeClass('pressed');
        }, 100);
    };

    // function donothing(){

    // };


    //step 168, 169
    // function soundPlay(name) {
    //     
    // };
    function checkAnswer(currentlevel) {
        // var i = currentlevel;
        // for (i = 0; i<currentlevel; i++){
        //     if (userClickedPattern[i]!=gamePattern[i]){
        //         wrong();
        //     }
        // }
        if ((gamePattern[currentlevel] == userClickedPattern[currentlevel])) {
            if (gamePattern.length == userClickedPattern.length){
                setTimeout(() => {
                    sequence();
                    userClickedPattern = [];
                }, 900);
            }  
        }
        else{
            wrong();
        }
    }

    function wrong (){
        $('body').addClass('game-over');
            var audio = new Audio('wrong.mp3');
            
            setTimeout(function () {
                $('body').removeClass('game-over');
                $('#level-title').text('Game over, press a key to start again!');
            }, 100);
            gamePattern = [];
            level = 0;
            started = false;
            userClickedPattern = [];
    }








