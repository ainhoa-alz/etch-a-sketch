document.addEventListener("DOMContentLoaded", function(){
    const gridContainer = document.querySelector(".grid-container"); 
    const gridSizeSlider = document.querySelector("#gridSizeSlider");
    const gridSize = document.querySelector(".grid-size");
    const colorPicker = document.querySelector("#colorPicker");
    const backgroundPicker = document.querySelector("#backgroundPicker");
    const eraser = document.querySelector(".eraser"); 
    

    let currentColor = colorPicker.value || "#000000";
    let backgroundColor = backgroundPicker.value || "#FFFFFF"; 
    let eraserMode = false; 
    
    function createGrid(size){
        gridContainer.innerHTML = "";

        const squareSize = 600 / size - 2; 

        for (let i = 0; i < size * size; i++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            gridContainer.appendChild(square); 
           

            square.addEventListener("mouseover", function(){
                if (!eraserMode && (!square.style.backgroundColor || square.style.backgroundColor === currentColor)) { 
                    square.style.backgroundColor = currentColor;
                }   else if (eraserMode && (!square.style.backgroundColor || square.style.backgroundColor !== currentColor)) {
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
        backgroundColor = backgroundPicker.value || "#FFFFFF"; 
        gridContainer.style.backgroundColor = backgroundColor;
    }); 

    eraser.addEventListener("click", function(){
        eraserMode = !eraserMode;
        eraser.classList.toggle("active");
       

    });

    

});