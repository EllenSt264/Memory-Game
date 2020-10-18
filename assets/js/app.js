document.addEventListener("DOMContentLoaded", function() {
    // First we need to store all of the memory cards
    const cards = $(".memory-card");

    // flipCard function
    
    var hasFlippedCard = false;
    var firstCard, secondCard;
    
    $(cards).click(function() {
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
    };

    function unflipCards() {
        setTimeout(function(){
            $(firstCard).removeClass("flip");
            $(secondCard).removeClass("flip");
        }, 1000);
    };
});

