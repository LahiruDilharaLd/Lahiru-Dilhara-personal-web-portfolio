async function getUserInfo() {
    let userBox = document.getElementById("userBox");

    // Get the username from the browser
    let username = navigator.userAgent;

    // Fetch IPv4 and IPv6 addresses
    let ipv4 = "Not Found";
    let ipv6 = "Not Found";
    try {
        let responseV4 = await fetch("https://api.ipify.org?format=json");
        let dataV4 = await responseV4.json();
        ipv4 = dataV4.ip;

        let responseV6 = await fetch("https://api64.ipify.org?format=json");
        let dataV6 = await responseV6.json();
        ipv6 = dataV6.ip;
    } catch (error) {
        console.error("Error fetching IP addresses:", error);
    }

    // Get device details
    let device = navigator.platform || "Unknown Device";

    // Fetch MAC address from backend
    let macAddress = "Not Available";
    try {
        let response = await fetch("http://localhost:3000/mac");
        let data = await response.json();
        macAddress = data.mac;
    } catch (error) {
        console.error("Error fetching MAC address:", error);
    }

    // Display information in the small box
    userBox.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Device:</strong> ${device}</p>
        <p><strong>IPv4:</strong> ${ipv4}</p>
        <p><strong>IPv6:</strong> ${ipv6}</p>
        <p><strong>MAC Address:</strong> ${macAddress}</p>
    `;
}

// Call the function when the page loads
window.onload = getUserInfo;
