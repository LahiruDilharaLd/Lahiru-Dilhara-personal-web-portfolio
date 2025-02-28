// Disable right-click
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Disable text selection
document.addEventListener("selectstart", function(event) {
    event.preventDefault();
});

// Disable keyboard shortcuts for copying and viewing source code
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "c" || event.key === "u" || event.key === "x" || event.key === "s")) {
        event.preventDefault();
    }
});
