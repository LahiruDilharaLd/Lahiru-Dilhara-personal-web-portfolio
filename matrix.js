const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("matrixBox").appendChild(canvas);

canvas.width = 300;
canvas.height = 100;
canvas.style.border = "1px solid green";
canvas.style.background = "black";

const fontSize = 5;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

const systemInfo = [
    "Authorized...",
    "Access Granted...",
    "Compression Complete.",
    "Compilation of Data Structures Complete...",
    "Entering Security Console...",
    "Encryption Unsuccessful. Attempting Retry...",
    "Waiting for response...",
    "....Searching..."
];

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#00FF00";
    ctx.font = fontSize + "px monospace";
    
    for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 2.0 ? systemInfo[Math.floor(Math.random() * systemInfo.length)] : String.fromCharCode(33 + Math.random() * 94);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.9) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);
