const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#Login");

const user = "admin";
const pw = "test";

button.addEventListener("click", () => {
    console.log(userName.value, user, password.value, pw);
    if (userName.value == user && password.value == pw) {

        localStorage.setItem("userID", userName);
        location.href = ("maillist.html");

    }
})



