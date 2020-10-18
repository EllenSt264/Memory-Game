document.addEventListener("DOMContentLoaded", function() {
    // First we need to store all of the memory cards
    const cards = $(".memory-card");

    // flipCard function

    let hasFlippedCard = false;
    let firstCard, secondCard;
    
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

            // Do the cards match?
            if (firstCard.dataset.cardname === secondCard.dataset.cardname) {
                // It's a match!
                $(firstCard).off("click");
                $(secondCard).off("click");
            }
            else {
                // It's not a match
                setTimeout(function(){
                    $(firstCard).removeClass("flip");
                    $(secondCard).removeClass("flip");
                }, 1000);
            }
        }
    });
})