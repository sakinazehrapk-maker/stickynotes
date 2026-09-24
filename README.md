# Sticky Notes wall

A cute interactive digital wall where users can create, customize, and arrange motivational Post-it notes. Users can also generate random motivational quotes and stick them directly onto their wall.

## Description

**Sticky notes wall** is a simple interactive web project built with HTML, CSS, and JavaScript. The website works like a digital bulletin board where users can leave motivational messages for themselves.

Users can create colorful Post-it notes, choose their preferred note color, move notes around the wall using drag-and-drop, and delete notes when they are no longer needed. The project also includes a motivational quote generator that provides random encouraging messages which can be added directly to the wall.

The notes are stored using the browser's **LocalStorage**, allowing them to remain on the wall even after refreshing or reopening the website in the same browser.

The project was created as a small, creative web development project focused on combining simple JavaScript functionality with a cute and interactive user interface.

### Screenshots

![website](image.png) 
![features](image-1.png)


## Getting Started

### Dependencies

The project does not require any external frameworks or libraries.

**Requirements:**

* Windows 10/11, macOS, or Linux
* A modern web browser such as Google Chrome, Microsoft Edge, or Firefox
* Visual Studio Code (recommended)
* Git (if cloning the repository)
* Live Server extension for VS Code (optional)

### Installing

* Download or clone the project from GitHub.
* Open the project folder in Visual Studio Code.
* Make sure the following files are present:

```text
motivational-wall/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

To clone the repository using Git:

```bash
git clone https://github.com/sakinazehrapk-maker/motivational-wall.git
```

Then navigate into the project folder:

```bash
cd motivational-wall
```

No additional packages or installations are required.

### Executing program

* Open the project folder in Visual Studio Code.
* Open `index.html`.
* Either open the file directly in a web browser or use the Live Server extension.
* Write a motivational message in the text box.
* Choose a Post-it color.
* Click **"Stick it!"** to add the note to the wall.
* Click and drag notes to move them around.
* Hover over a note and click **×** to delete it.
* Use **"Give me a little motivation"** to generate a random motivational quote.
* Click **"Stick this on my wall"** to add the generated quote as a Post-it.

If using Live Server:

```text
Right click index.html → Open with Live Server
```

The website will then open in your default browser.

## Help

### Notes disappear after clearing browser data

The project uses the browser's **LocalStorage** to save notes. Clearing browser storage, cookies, or site data can remove saved notes.

### Notes are not being saved

Make sure JavaScript is enabled in your browser and that you are opening the project in a normal browser environment.

Opening the project with Live Server is recommended during development.

### The website does not look correctly styled

Make sure `style.css` is in the same folder as `index.html`:

```text
motivational-wall/
├── index.html
├── style.css
└── script.js
```

Also check that `index.html` contains:

```html
<link rel="stylesheet" href="style.css">
```

### The buttons do not work

Make sure `script.js` is in the same folder as `index.html` and that the HTML file includes:

```html
<script src="script.js"></script>
```

If the problem continues, open the browser's developer console with:

```text
F12 → Console
```

and check for JavaScript errors.

## License

This project is licensed under the **MIT License** - see the `LICENSE.md` file for details.
Made for Hackclub Pixl!!
