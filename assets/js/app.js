document.addEventListener("DOMContentLoaded", function() {
    // First we need to store all of the memory cards
    const cards = $(".memory-card");

    // flipCard function
    $(cards).click(function() {
        $(this).toggleClass("flip");
    });

})