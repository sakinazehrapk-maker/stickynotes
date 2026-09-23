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
    note.textContent = text;
    note.style.backgroundColor = noteColor.value;
    wall.appendChild(note);
    noteText.value = "";
});