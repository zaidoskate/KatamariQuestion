async function loadMessage() {
    try {
        const response = await fetch("message.json");
        const data = await response.json();
        return data.yesMessage;
    } catch (error) {
        console.error("Error al cargar el mensaje:", error);
        return "Error al cargar el mensaje. Por favor, intenta nuevamente.";
    }
}

function moveButton(buttonId) {
    const button = document.getElementById(buttonId);
    const areaSize = 50;
    const startX = (window.innerWidth) / 4;
    const startY = (window.innerHeight) / 4;
    const randomLeft = startX + Math.random() * areaSize;
    const randomTop = startY + Math.random() * areaSize;
    button.style.position = "absolute";
    button.style.left = `${randomLeft}px`;
    button.style.top = `${randomTop}px`;
}


async function selectOption(option) {
    const container = document.getElementById("container");
    if (option === "yes") {
        container.innerHTML = "";
        const message = await loadMessage();
        const messageDiv = document.createElement("div");
        messageDiv.innerHTML = message.replace(/\n/g, "<br>");
        messageDiv.style.fontSize = "18px";
        messageDiv.style.color = "#FB607F";
        messageDiv.style.fontFamily = "'Merriweather', serif";
        messageDiv.style.textAlign = "center";
        messageDiv.style.padding = "20px";

        container.appendChild(messageDiv);
    } else if (option === "no") {
        moveButton("no-button");
    }
}
