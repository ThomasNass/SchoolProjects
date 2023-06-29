const list = document.querySelector("#list");

const displayMail = async () => {

    const emails = await fetch("http://localhost:5000");
    const data = await emails.json();

    for (let i = 0; i < data.length; i++) {
        const li = document.createElement("li");
        li.textContent = data[i].mail;
        list.appendChild(li);
    }
}

if (localStorage.getItem("userID")) {

    displayMail();
    localStorage.removeItem("userID");
}