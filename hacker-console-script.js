const outputConsole = document.querySelector('#hacker-console');
let isProcessing = false, processTime = 0, lastProcess = 0;

const commandResponses = [
    'Authorizing ', 'Authorized...', 'Access Granted...', 'Going Deeper...',
    'Compression Complete.', 'Compilation of Data Structures Complete...',
    'Entering Security Console...', 'Encryption Unsuccessful. Attempting Retry...',
    'Waiting for response...', '....Searching...', 'Calculating Space Requirements...',
    'Bruteforce Successful...', 'Backdoor Injected...', 'Payload Delivered...',
    'SSH Connection Established...', 'Proxy Server Ready...', 'Root Privileges Acquired...',
    'Firewall Breached...', 'Session Hijacked...', 'Vulnerability Exploited...',
    'SQL Injection Successful...', 'Malware Planted...', 'MAC Address Spoofed...',
    'Traffic Successfully Monitored...', 'Privileged Access Gained...',
    'Command Executed Successfully...', 'Reverse Shell Established...',
    'Password Hash Cracked...', 'Zero-Day Exploit Delivered...', 'Exfiltrating Data...',
    'Database Compromised...', 'SSL/TLS Handshake Complete...', 'Kernel Module Loaded...',
    'Blockchain Node Syncing...', 'Two-Factor Authentication Bypassed...',
    'Intrusion Detection System Evaded...', 'Packet Data Captured...',
    'Operating System Fingerprinted...', 'Keylogger Injected...',
    'Memory Dump Completed...', 'Trojan Horse Deployed...',
    'Dark Web Forums Scraped...', 'Exploit Kit Ready...', 'FTP Credentials Stolen...',
    'Proxy Chain Established...', 'Router Logs Analyzed...', 'Botnet Command Issued...',
    'Sandbox Evasion Successful...', 'Remote Access Tool Installed...',
    'Exploit Executed Successfully...', 'Dark Web Purchase Confirmed...'
];

const commandParts = [
    'Data Structure', 'http://wwjd.com?au&2', 'Texture', 'TPS Reports',
    ' .... Searching ... ', 'http://zanb.se/?23&88&far=2',
    'http://ab.ret45-33/?timing=1ww', 'Internal Server', 'Encrypted Files',
    'User Credentials', 'Remote Host', 'Suspicious Activity Logs',
    'Root Access Point', 'Public/Private Key', 'Virtual Machine Instance',
    'Tor Exit Node', 'Mainframe', 'Security Protocols', 'External Hard Drive',
    'Web Application', 'Database Tables', 'Router Settings', 'Admin Credentials',
    'Command & Control Server', 'Cloud Infrastructure', 'Password Hashes',
    'Zero-Day Exploit', 'Ransomware', 'SMTP Server', 'SSL/TLS Certificates',
    'Kernel Modules', 'Session Cookies', 'Blockchain Nodes', 'Proxy Server',
    'Target Device', 'IP Addresses', 'Credential Dumps', 'FTP Server',
    'Dark Web Marketplace', 'Malware Dropper', 'Exploit Database', 'Log Files',
    'System Registry', 'Memory Dumps', 'Sandbox Environment', 'Bootloader',
    'Router Firewall', 'Security Software'
];

const commandStart = [
    'Performing DNS Lookups for ', 'Searching ', 'Analyzing ', 'Estimating Approximate Location of ',
    'Compressing ', 'Requesting Authorization From : ', 'wget -a -t ',
    'tar -xzf ', 'Entering Location ', 'Compilation Started of ',
    'Downloading ', 'Initializing Proxy Server ', 'Attempting SSH Connection ',
    'Scanning Network ', 'Bruteforcing Passwords for ', 'Decrypting Data from ',
    'Injecting Payload into ', 'Opening Reverse Shell for ', 'Phishing Target: ',
    'Executing SQL Injection on ', 'Bypassing Firewall for ', 'Planting Malware in ',
    'Exploiting Vulnerability in ', 'Escalating Privileges for ', 'Monitoring Traffic at ',
    'Hijacking Session at ', 'Spoofing MAC Address for ', 'Compromising Server at ',
    'Injecting Malicious Script into ', 'Establishing Backdoor into ', 'Mapping Network for ',
    'Overclocking System Resources ', 'Generating Hash for ', 'Uploading Exploit to ',
    'Forcing Password Reset on ', 'Enumerating Ports on ', 'Evading Intrusion Detection Systems for ',
    'Interrogating Router Logs for ', 'Scraping Dark Web Forums for ',
    'Compiling Threat Reports on ', 'Hijacking Web Sessions for ',
    'Bypassing Two-Factor Authentication for ', 'Capturing Packet Data from ',
    'Sniffing Traffic from ', 'Fingerprinting Operating System for ',
    'Injecting Keylogger into ', 'Mapping Subnets for ', 'Listening for Open Ports on ',
    'Deploying Trojan Horse to ', 'Dumping Memory from ', 'Compiling Exploit Kit for '
];

function consoleOutput() {
    let textEl = document.createElement('p');

    if (isProcessing) {
        textEl = document.createElement('span');
        textEl.textContent += Math.random().toFixed(9) + " ";
        if (Date.now() > lastProcess + processTime) {
            isProcessing = false;
        }
    } else {
        const commandType = ~~(Math.random() * 5);
        switch (commandType) {
            case 0:
                textEl.textContent = commandStart[~~(Math.random() * commandStart.length)] + commandParts[~~(Math.random() * commandParts.length)];
                break;
            case 3:
                isProcessing = true;
                processTime = ~~(Math.random() * 5000);
                lastProcess = Date.now();
            default:
                textEl.textContent = commandResponses[~~(Math.random() * commandResponses.length)];
                break;
        }
    }

    // Randomly change text color to red
    if (Math.random() < 0.1) { // 10% chance to change color
        textEl.style.color = 'red';
    }

    outputConsole.appendChild(textEl);
    outputConsole.scrollTop = outputConsole.scrollHeight;

    if (outputConsole.scrollHeight > window.innerHeight * 2) {
        const removeNodes = outputConsole.querySelectorAll('p');
        for (let n = 0; n < ~~(removeNodes.length / 3); n++) {
            outputConsole.removeChild(removeNodes[n]);
        }
    }

    setTimeout(consoleOutput, ~~(Math.random() * 500));
}

consoleOutput();
