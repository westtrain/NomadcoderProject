// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const text = document.getElementsByTagName("h2")[0];

const superEventHandler = {
  mouseOver() {
    text.style.color = colors[0];
    text.innerHTML = "The mouse is here!";
  },

  mouseLeave() {
    text.style.color = colors[1];
    text.innerHTML = "The mouse is gone!";
  },

  resizeWindow() {
    text.style.color = colors[2];
    text.innerHTML = "You just resized!";
  },

  rClick() {
    if (event.button === 2) {
      text.style.color = colors[3];
      text.innerHTML = "That was a right click!";
    }
  }
};

text.onmouseover = superEventHandler.mouseOver;
text.onmouseleave = superEventHandler.mouseLeave;
document.body.onresize = superEventHandler.resizeWindow;
document.onmousedown = superEventHandler.rClick;
