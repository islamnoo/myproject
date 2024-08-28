document.getElementById("joinButton").addEventListener("click", function() {
    var button = this;
    button.classList.add("clicked");

    // Remove the animation class after it's done to allow replay
    setTimeout(function() {
        button.classList.remove("clicked");
    }, 400); // Match this duration to the animation duration in CSS
});
