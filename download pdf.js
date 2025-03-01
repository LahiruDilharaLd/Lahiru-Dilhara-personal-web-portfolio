document.getElementById("downloadBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent immediate navigation

    let countdown = 9;
    let countdownText = document.getElementById("countdown");
    let dialogBox = document.getElementById("countdownDialog");

    // Show the countdown dialog
    dialogBox.style.display = "block";

    let countdownInterval = setInterval(function () {
        countdownText.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            dialogBox.style.display = "none"; // Hide dialog box

            // Start the download
            let link = document.createElement("a");
            link.href = "PDF/Lahiru Dilhara(l_with_5).pdf";
            link.download = "Lahiru_Dilhara_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }, 1000); // Countdown updates every 1 second
});
