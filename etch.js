

const container = document.querySelector('#container');
const input = document.querySelector('#boxNumber');
const button = document.querySelector('#boxConfirm');

button.addEventListener('click', () => {
    container.innerHTML = ''; // Clear box container
    let boxRowLength = input.value; // variable N for use in N x N grid
    let boxSize = 1000/boxRowLength; // Size per box

    if (boxRowLength <= 100){
        // Generate NxN grid
        for (let i = 0; i < boxRowLength; i++){
            for (let j = 0; j < boxRowLength; j++){
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                const box = document.createElement('div');
                box.classList.add("redbox");
    
                box.style.width = boxSize + "px";
                box.style.height = boxSize + "px";
    
                box.addEventListener("mouseover", () =>
                    box.style.backgroundColor = "#" + randomColor
                );
    
                container.appendChild(box);
            }
        }
    } 
    // Loop N x N times

})
