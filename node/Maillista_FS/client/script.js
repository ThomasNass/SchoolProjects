const sendMail = async () => {
    const input = document.querySelector("input");
    const mail = { mail: input.value }

    const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mail),
    });
    const data = await response.json();
    if (data.success) {
        input.value = "";
    }
};

document.querySelector("button").addEventListener("click", sendMail);