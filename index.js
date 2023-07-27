
var colorName = ["green", "blue", "red", "yellow"]
var gameSeq = []
var colorSeq = 1
var gameStatus = false
function startGame(status){
    switch (status) {
        case false:
            $("h1").text("Level 1")
            game();
            gameStatus = true
            break;
    
        default:
            break;
    }
}
function game() {
    var varNum = Math.floor(Math.random()*4)
    var selectedColor = colorName[varNum]
    gameSeq.push(selectedColor)
    setTimeout(function(){
        var audio = new Audio(selectedColor + ".mp3")
        $("." + selectedColor).fadeOut(100)
        $("." + selectedColor).fadeIn(100)
        audio.play();
    }, 500)
}

$(document).on("keypress", function(){
    startGame(gameStatus)
})

$(".btn").each(function(){
    $(this).on("click", function(){
        i = $(this).attr("id")
        $(this).addClass("pressed")
        setTimeout(function(){
            $("."+i).removeClass("pressed")
        }, 100)
        var btnAudio = new Audio(i + ".mp3")
        btnAudio.play()
        switch (gameSeq[colorSeq-1]) {
            case i:
                if (colorSeq==gameSeq.length){
                    colorSeq = 1
                    $("h1").text("Level" + " " + (gameSeq.length+1))
                    game()
                }
                else if (colorSeq < gameSeq.length) {
                    colorSeq++
                }
                break;
        
            default:
                gameOver()
                break;
        }
    })      
    }
)

function gameOver(){
    var audio = new Audio("wrong.mp3")
    audio.play()
    $("h1").text("Game Over. Press any key to restart")
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
    }, 100)
    gameStatus = false
    gameSeq = []
    colorSeq = 1
}
