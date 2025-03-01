document.addEventListener("click", playMusic);
document.addEventListener("touchstart", playMusic);

function playMusic() {
    let audio = new Audio("Study Group.mp3");
    audio.loop = true;
    audio.volume = 0.1; // Set volume to 30%
    audio.play().catch(error => {
        console.log("Autoplay blocked: User interaction required");
    });

    // Remove event listeners after the first interaction
    document.removeEventListener("click", playMusic);
    document.removeEventListener("touchstart", playMusic);
}
