$(document).ready(function() {
    // Draw a grid
    const connect4 = new Connect4('#connect4');

    $('#restart').click(function(){
        connect4.restart();
    });
});