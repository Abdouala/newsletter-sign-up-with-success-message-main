import './scss/style.scss'

var form = document.getElementsByTagName('form')[0];
var email = document.getElementById("email");
var error = document.querySelector(".error");

email.addEventListener(
    'input',
    function (event) {
        if(email.validity.valid) {
            error.innerHTML = "";
            error.className = "error";
        }
    },
    false,
);

form.addEventListener(
    'submit',
    function(event) {
        if(!email.validity.valid || email.value == '') {
            error.innerHTML = "Valid email required";
            error.className = "error";
            event.preventDefault();
        }
    },
    false,
);




