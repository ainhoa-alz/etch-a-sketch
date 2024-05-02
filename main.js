document.addEventListener("DOMContentLoaded", function(){
    const gridContainer = document.querySelector(".grid-container"); 
    const gridSizeSlider = document.querySelector("#gridSizeSlider");
    const gridSize = document.querySelector(".grid-size");
    const colorPicker = document.querySelector("#colorPicker");
    let currentColor = colorPicker.value || "#000000";
    
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
                if (!square.style.backgroundColor || square.style.backgroundColor === currentColor) { // Aplicar nuevo color solo si el cuadrado no tiene un color asignado o ya tiene el color actual
                    square.style.backgroundColor = currentColor;
                }
            });
        }
        gridSize.textContent = `${size}x${size}`;
    }

    createGrid(gridSizeSlider.value);
    gridSizeSlider.addEventListener('input', function() {
        createGrid(this.value);

    });
    colorPicker.addEventListener('change', function() { // Usar el evento 'change' en lugar de 'click' para detectar cambios de color
        currentColor = colorPicker.value || "#000000"; // Actualizar el color actualmente seleccionado o establecer el color por defecto
    });

    
    

});