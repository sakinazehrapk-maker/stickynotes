const quotes = [
    "Dont wait to be whole. Go limping. Go with questions. Go while the pieces are still coming together. Just go.",
    "what is meant for you will find you, it knows you by name",
    "To unpathed waters and undreamed shores -William Shakespeare",
    "you cant skip the messy part, the mes part is hwere you grow",
    "and if it doesnt happen the way you wanted, itll happen in a way better than you imagined",
    "thers a future version of you telling the most incredible story of how all this came together",
    "you just have to get really good at continuing",
    "what is done with love is done well",
    "long live the reckless and the brave",
    "when my skills dont match my ambition, it is my job to raise my capabilities not to lower my desire",
    "and theres always another train",
    "you worry too much who figures it out every single time"
];
const wall = document.getElementById("wall");
const noteText = document.getElementById("noteText");
const noteColor = document.getElementById("noteColor");
const addNoteButton = document.getElementById("addNote");
let savedNotes = JSON.parse(localStorage.getItem("motivationalNotes")) || [];
const motivationButton =
    document.getElementById("motivationButton");
const stickQuote =
    document.getElementById("stickQuote");
const quote =
    document.getElementById("quote");
let currentQuote = "";
motivationButton.addEventListener("click", function () {
    const randomIndex =
        Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    quote.textContent = currentQuote;
    stickQuote.classList.remove("hidden");
});
stickQuote.addEventListener("click", function () {
    if (currentQuote === "") return;
    const maxX = wall.clientWidth - 210;
    const maxY = wall.clientHeight - 210;
    const randomX =
        Math.random() * maxX;
    const randomY =
        Math.random() * maxY;
    const rotation =
        Math.random() * 8 - 4;
    const colors = [
        "#fff3a6",
        "#ffd6e7",
        "#cdefff",
        "#d9f7be",
        "#e5d4ff"
    ];
    const randomColor =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];
    createNote(
        currentQuote,
        randomColor,
        `${randomX}px`,
        `${randomY}px`,
        rotation
    );
    saveNotes();
    stickQuote.classList.add("hidden");
});
function saveNotes() {
    const notes = [];
    document.querySelectorAll(".note").forEach(function (note) {
        notes.push({
            text: note.querySelector(".message").textContent,
            color: note.style.backgroundColor,
            left: note.style.left,
            top: note.style.top,
            rotation: note.dataset.rotation
        });
    });
    localStorage.setItem("motivationalNotes", JSON.stringify(notes));
}
function createNote(text, color, left, top, rotation) {
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
    note.style.backgroundColor = color;
    note.style.left =left;
    note.style.top = top;
    note.dataset.rotation = rotation;
    note.style.transform = `rotate(${rotation}deg)`;
    wall.appendChild(note);
    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        note.remove();
        saveNotes();
    });
}
addNoteButton.addEventListener("click", function () {
    const text = noteText.value.trim();
    if (text === "") {
        alert("Write something first!");
        return;
    }
    const maxX = wall.clientWidth - 210;
    const maxY = wall.clientHeight - 210;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    const rotation = Math.random() * 8 - 4;
    createNote(
        text,
        noteColor.value,
        `${randomX}px`,
        `${randomY}px`,
        rotation
    );
    noteText.value = "";
    saveNotes();
});
let activeNote = null;
let offsetX = 0;
let offsetY = 0;
wall.addEventListener("mousedown", function (event) {
    const note = event.target.closest(".note");
    if (!note) return;
    if (event.target.classList.contains("delete-note")) {
        return;
    }
    activeNote = note;
    const noteRect = note.getBoundingClientRect();
    offsetX = event.clientX - noteRect.left;
    offsetY = event.clientY - noteRect.top;
    note.style.zIndex = 100;
});
document.addEventListener("mousemove", function (event) {
    if (!activeNote) return;
    const wallRect = wall.getBoundingClientRect();
    let newX =
        event.clientX -
        wallRect.left -
        offsetX;
    let newY =
        event.clientY -
        wallRect.top -
        offsetY;
    const maxX =
        wall.clientWidth -
        activeNote.offsetWidth;
    const maxY =
        wall.clientHeight -
        activeNote.offsetHeight;
    newX = Math.max(
        0,
        Math.min(newX, maxX)
    );
    newY = Math.max(
        0,
        Math.min(newY, maxY)
    );
    activeNote.style.left = `${newX}px`;
    activeNote.style.top = `${newY}px`;
});
document.addEventListener("mouseup", function () {
    if (!activeNote) return;
    activeNote.style.zIndex = 1;
    saveNotes();
    activeNote = null;
});
savedNotes.forEach(function (note) {
    createNote(
        note.text,
        note.color,
        note.left,
        note.top,
        note.rotation
    );
});