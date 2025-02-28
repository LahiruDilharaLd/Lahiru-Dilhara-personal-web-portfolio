// Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable Keyboard Shortcuts (F12, Ctrl+U, Ctrl+Shift+I, Ctrl+C)
document.addEventListener("keydown", function (e) {
    if (
        e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.keyCode == 85) || // Ctrl+U
        (e.ctrlKey && e.keyCode == 67) // Ctrl+C (Copy)
    ) {
        e.preventDefault();
    }
});

// Prevent Console Access (Detect Developer Tools)
(function () {
    var DevToolsBlocker = function () {};
    DevToolsBlocker.prototype.check = function () {
        var element = new Image();
        Object.defineProperty(element, "id", {
            get: function () {
                throw new Error("DevTools Access Blocked!");
            }
        });
        console.log("%c", element);
    };
    var dtb = new DevToolsBlocker();
    setInterval(function () {
        try {
            dtb.check();
        } catch (e) {
            window.location.href = "about:blank"; // Redirect if DevTools opened
        }
    }, 1000);
})();

// Disable Text Selection & Copying
document.addEventListener("copy", function (e) {
    e.preventDefault();
});
document.addEventListener("selectstart", function (e) {
    e.preventDefault();
});
