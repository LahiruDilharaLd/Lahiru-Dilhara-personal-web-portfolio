// Function to minify the HTML source
function minifyHTML() {
    let html = document.documentElement.outerHTML;

    html = html.replace(/\s{2,}/g, " ")  // Remove multiple spaces
               .replace(/\n/g, "")       // Remove new lines
               .replace(/\t/g, "")       // Remove tabs
               .replace(/>\s+</g, "><")  // Remove spaces between tags
               .replace(/<!--[\s\S]*?-->/g, ""); // Remove HTML comments

    // Replace the current document with the minified version
    document.open();
    document.write(html);
    document.close();
}

// Run the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", minifyHTML);
