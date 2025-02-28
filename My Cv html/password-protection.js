// Store password hash
const correctPasswordHash = 'a2c4165016c58f72cfd956d5354ce409'; // This is 'password' in MD5

// Function to hash the password using MD5
function md5(string) {
    return CryptoJS.MD5(string).toString();
}

// Create overlay div for password prompt
function createPasswordOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'passwordOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    const promptBox = document.createElement('div');
    promptBox.style.cssText = `
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        max-width: 400px;
        width: 90%;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Password Protected CV';
    title.style.marginBottom = '20px';

    const form = document.createElement('form');
    form.id = 'passwordForm';
    form.innerHTML = `
        <p style="margin-bottom: 15px;">Please enter the password to view this CV:</p>
        <input type="password" id="passwordInput" style="
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        ">
        <button type="submit" style="
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        ">Submit</button>
        <p id="errorMessage" style="color: red; margin-top: 10px; display: none;">Incorrect password. Please try again.</p>
    `;

    promptBox.appendChild(title);
    promptBox.appendChild(form);
    overlay.appendChild(promptBox);
    return overlay;
}

// Function to check password
function checkPassword(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const enteredPassword = passwordInput.value;
    
    // Hash the entered password and compare
    if (md5(enteredPassword) === correctPasswordHash) {
        const overlay = document.getElementById('passwordOverlay');
        overlay.style.display = 'none';
        // Show the content
        document.body.style.overflow = 'auto';
    } else {
        errorMessage.style.display = 'block';
        passwordInput.value = '';
    }
}

// Initialize password protection
document.addEventListener('DOMContentLoaded', function() {
    // Hide body content initially
    document.body.style.overflow = 'hidden';
    
    // Create and add the overlay
    const overlay = createPasswordOverlay();
    document.body.appendChild(overlay);
    
    // Add form submit event listener
    const form = document.getElementById('passwordForm');
    form.addEventListener('submit', checkPassword);
});

// Prevent right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Prevent keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Prevent Ctrl+U (view source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+Shift+I (developer tools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+S (save page)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
});