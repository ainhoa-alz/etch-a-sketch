document.addEventListener("DOMContentLoaded", function(){
    const gridContainer = document.querySelector(".grid-container"); 
    const gridSizeSlider = document.querySelector("#gridSizeSlider");
    const gridSize = document.querySelector(".grid-size");
    const colorPicker = document.querySelector("#colorPicker");
    const backgroundPicker = document.querySelector("#backgroundPicker");
    const randomColor = document.querySelector(".random-color"); 
    const eraser = document.querySelector(".eraser"); 
    const clear = document.querySelector(".clear");
    

    let currentColor = colorPicker.value || "#000000";
    let backgroundColor = backgroundPicker.value || "#F5F5F7"; 
    let eraserMode = false; 
    let randomMode = false; 
    
    function createGrid(size){
        gridContainer.innerHTML = "";

        const squareSize = 550 / size - 2; 

        for (let i = 0; i < size * size; i++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            gridContainer.appendChild(square); 
           

            square.addEventListener("mouseover", function(){
                if (randomMode) {
                    const randomRed = Math.floor(Math.random() * 256);
                    const randomGreen = Math.floor(Math.random() * 256);
                    const randomBlue = Math.floor(Math.random() * 256);
                    square.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
                } else if (!eraserMode && (!square.style.backgroundColor || square.style.backgroundColor === currentColor)) { 
                    square.style.backgroundColor = currentColor;
                } else if (eraserMode && (!square.style.backgroundColor || square.style.backgroundColor !== currentColor)) {
                    square.style.backgroundColor = ""; 
                }
            });
        }
        gridSize.textContent = `${size}x${size}`;
    }

    createGrid(gridSizeSlider.value);
    gridSizeSlider.addEventListener('input', function() {
        createGrid(this.value);

    });

    

    colorPicker.addEventListener('change', function() { 
        currentColor = colorPicker.value || "#000000"; 
    });

    backgroundPicker.addEventListener("input", function(){
        backgroundColor = backgroundPicker.value || "#F5F5F7"; 
        gridContainer.style.backgroundColor = backgroundColor;
    }); 

    eraser.addEventListener("click", function(){
        randomMode = false;
        eraserMode = !eraserMode;
        eraser.classList.toggle("active");
        randomColor.classList.remove("active");
    });

    clear.addEventListener("click", function(){
        const squares = document.querySelectorAll(".square"); 
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = ""; 
        }
    });

    randomColor.addEventListener("click", function(){
        randomMode = !randomMode;
        randomColor.classList.toggle("active"); 
        eraserMode = false; 
        eraser.classList.remove("active");

    }); 

});