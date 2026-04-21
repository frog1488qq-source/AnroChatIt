// script.js

// Frontend WebSocket communication and UI interactions

const serverUrl = 'ws://your-server-url';
let socket;

function setupWebSocket() {
    socket = new WebSocket(serverUrl);

    socket.onopen = () => {
        console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        handleMessage(message);
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed.');
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };
}

function handleMessage(message) {
    // Handle incoming messages from the server
    console.log('Received message:', message);
    // Update UI based on message type
    if (message.type === 'notification') {
        showNotification(message.data);
    }
}

function showNotification(data) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = data;
    document.body.appendChild(notification);
}

// Initialize the WebSocket on page load
window.onload = setupWebSocket;