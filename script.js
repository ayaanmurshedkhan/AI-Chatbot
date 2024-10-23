const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");

const userData = {
    message: null
}
// Create message element with dynamic classes and return it.
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

// Handel outgoing user message
const handleOutgoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();
    messageInput.value = "";

    // Create and display user message
    const messageContant = `<div class="message-text"></div>`;
    const outgoingMessageDiv = createMessageElement(messageContant, "user-message");
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message;
    chatBody.appendChild(outgoingMessageDiv);

    setTimeout(() => {
    const messageContant = `<div class="message-text"></div>`;

    const outgoingMessageDiv = createMessageElement(messageContant, "user-message");
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
    }, 600);
}

// Handel Enter key press for sending messages.
messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if(e.key === "Enter" && userMessage) {
        handleOutgoingMessage(userMessage);
    }
});

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e))



// 29:17