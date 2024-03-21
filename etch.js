let boxRowLength = 16; // variable N for use in N x N grid
let boxSize = 1000/boxRowLength; // Size per box

const container = document.querySelector('#container');

// Loop N x N times
for (let i = 0; i < boxRowLength; i++){
    for (let j = 0; j < boxRowLength; j++){
        const box = document.createElement('div');
        box.classList.add("redbox");

        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";

        box.addEventListener("mouseover", () =>
            box.style.backgroundColor = "red"
        );

        container.appendChild(box);
    }
}
