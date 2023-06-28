const textInput = document.querySelector('#validation-input');

const inputLength = document.querySelector('input[data-length="6"]');

textInput.addEventListener("blur", (input) => {
          
    if (Number(inputLength.dataset.length) === input.currentTarget.value.trim().length) {
        
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");

    } else if (input.currentTarget.value.trim().length === 0){
        textInput.classList.remove("invalid");
        textInput.classList.remove("valid");
    }else{textInput.classList.add("invalid")}   
});