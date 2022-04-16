//save a reference to our display dom element using an id of display
let display = document.getElementById("display");

//store the button references in an array
//this function gives back a NodeCollection instead of an array so we have to convert it to an array using Array.from().
let buttons = Array.from(document.getElementsByClassName("button"));

//add event listeners for the buttons, we'll map through the buttons array and add a click event listener for each
buttons.map((button) => {
    button.addEventListener("click", (e) => {
        //  e.target.innerText to give back the label of the button that was clicked.
        switch (e.target.innerText) {
            case "C": // when the user hits the "C" button we will clear the display
                display.innerText = "";
                break;
            case "=":
                try {
                    //wrap into a try catch block to handle errors
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                break;
            case "←":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});