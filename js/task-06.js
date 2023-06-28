const textInput = document.querySelector('#validation-input');

const inputLength = document.querySelector('input[data-length="6"]');

textInput.addEventListener("blur", (input) => {
          
    if (Number(inputLength.dataset.length) === input.currentTarget.value.length) {
        
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");

    } else {textInput.classList.add("invalid");}   
});
