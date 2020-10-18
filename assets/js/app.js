document.addEventListener("DOMContentLoaded", function() {
    // First we need to store all of the memory cards
    const cards = $(".memory-card");

    // Shuffle
    // Taken from: "https://stackoverflow.com/questions/53686841/html-shuffle-div-images-javascript"

    var a = $(".memory-game > div").remove().toArray();
    for (var i = a.length - 1; i >= 1; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var bi = a[i];
        var bj = a[j];
        a[i] = bj;
        a[j] = bi;
    }
    $(".memory-game").append(a);

    // flipCard function

    var hasFlippedCard = false;
    var lockBoard = false;
    var firstCard, secondCard;
    
    $(cards).click(function() {
        if (lockBoard) return;
        if (this === firstCard) return;

        $(this).addClass("flip");

        if (!hasFlippedCard) {      // if a card has not been flipped/clicked
            // first click
            hasFlippedCard = true;
            firstCard = this;
        }
        else {
            // second click
            hasFlippedCard = false;
            secondCard = this;
            checkForMatch();
        }
    });

    function checkForMatch() {
    // Do the cards match?  
    let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
    // Ternary operator
    // A ternary operation allows you to write an if/else block in just one line
    // condition ? expression1 (true) : expression2 (false)
    isMatch ? disableCards() : unflipCards();
    };

    function disableCards() {
        $(firstCard).off("click");
        $(secondCard).off("click");

        resetBoard();
    };

    function unflipCards() {
        lockBoard = true;

        setTimeout(function(){
            $(firstCard).removeClass("flip");
            $(secondCard).removeClass("flip");

            resetBoard();
        }, 1000);
    };
    
    // In order for the condtion to work after each round,
    // we have to set the first and second card to null
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    
})