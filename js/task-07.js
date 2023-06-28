const inputSize = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

let size = parseInt(span.style.fontSize);

inputSize.addEventListener("input", event => {
        
    size = event.currentTarget.value;
    span.style.fontSize = `${size}px`;    
});