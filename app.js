const password = document.querySelector('#password');
const image = document.querySelector('#imgIcon');


const loginPageContainer = document.querySelector('.container');
const userName = document.querySelector('#userName');
const submitBtn = document.querySelector('#submitButton');

image.addEventListener("click", () => {
  if(password.type == "password") {
    image.src = "eye-open.png";
    password.type = "text";
  } else {
    image.src = "eye-close.png";
    password.type = "password";
  }
});


submitBtn.addEventListener("click", () => {
  if(userName.value == "admin" && password.value == 12345) {
    loginPageContainer.style.display = "none";
  } else {
    alert("Invalid username");
  }
})

