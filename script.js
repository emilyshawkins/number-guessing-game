let btn = document.querySelector('#check');
const randInt = Math.floor((Math.random() * 100) + 1);
let tries = 0;

function change() {
    let userGuess = document.querySelector("#guess").value;
    tries++;
    if (userGuess !== "") {
        if (userGuess == randInt) {
            document.getElementById("response").innerHTML = "Congratulations! You got it in " + tries + " tries!";
            win = true;
            btn.removeEventListener("click", change);
        }
        else if (userGuess < randInt) {
            document.getElementById("response").innerHTML = "Too Low. Please try again!";
        }
        else if (userGuess > randInt) {
            document.getElementById("response").innerHTML = "Too High. Please try again!";
        }
        
    }
    else {
        document.getElementById("response").innerHTML = "Please Enter a Number.";
    }
}

btn.addEventListener("click", change);

