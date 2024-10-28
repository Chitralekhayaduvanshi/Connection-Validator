const url = new URL(window.location.href);
const message = validateConnection(url);

// Create a div element to display the message
const messageDiv = document.createElement('div');
messageDiv.style.position = 'fixed';
messageDiv.style.top = '10px';
messageDiv.style.right = '10px';
messageDiv.style.padding = '10px';
messageDiv.style.backgroundColor = 'lightyellow';
messageDiv.style.border = '1px solid black';
messageDiv.style.zIndex = '1000';
messageDiv.textContent = message;

// Append the message div to the body
document.body.appendChild(messageDiv);

// Remove the message after 5 seconds
setTimeout(() => {
    messageDiv.remove();
}, 5000);

function validateConnection(url) {
    if (url.protocol === 'https:') {
        return "Connection is secure (HTTPS).";
    } else if (url.protocol === 'http:') {
        return "Warning: Connection is not secure (HTTP).";
    } else {
        return "Unable to validate connection.";
    }
}
