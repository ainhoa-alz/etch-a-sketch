
document.addEventListener("DOMContentLoaded", function(){
    const gridContainer = document.querySelector(".grid-container"); 
    for (let i=0; i<16*16;i++){
        const square= document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square); 

    square.addEventListener("mouseover", function(){
        square.classList.add("hovered")
    });
    }
})

