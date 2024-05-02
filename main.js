document.addEventListener("DOMContentLoaded", function(){
    const gridContainer = document.querySelector(".grid-container"); 
    const gridSizeSlider = document.querySelector("#gridSizeSlider");
    const gridSize = document.querySelector(".grid-size");
    
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
                square.classList.add("hovered");
            });
        }
        gridSize.textContent = `${size}x${size}`;
    }

    createGrid(gridSizeSlider.value);
    gridSizeSlider.addEventListener('input', function() {
        createGrid(this.value);

    });
    

});