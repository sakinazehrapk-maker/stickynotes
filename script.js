const wall = document.getElementById("wall");
const noteText = document.getElementById("noteText");
const noteColor = document.getElementById("noteColor");
const addNoteButton = document.getElementById("addNote");
addNoteButton.addEventListener("click", function () {
    const text = noteText.value.trim();
    if (text === "") {
        alert("Write something first!");
        return;
    }
    const note = document.createElement("div");
    note.classList.add("note");
    const pin = document.createElement("div");
    pin.classList.add("pin");
    pin.textContent = "📌";
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = text;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-note");
    deleteButton.textContent = "×";
    note.appendChild(pin);
    note.appendChild(message);
    note.appendChild(deleteButton);
    note.style.backgroundColor = noteColor.value;
    const maxX = wall.clientWidth - 210;
    const maxY = wall.clientHeight - 210;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    note.style.left = `${randomX}px`;
    note.style.top = `${randomY}px`;
    const rotation = Math.random() * 8 - 4;
    note.style.transform = `rotate(${rotation}deg)`;
    wall.appendChild(note);
    deleteButton.addEventListener("click", function () {
        note.remove();
    });
    noteText.value = "";
});