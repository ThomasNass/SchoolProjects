import signalR from "@microsoft/signalr/dist/browser/signalr.min";

export const negotiate = async () => {
    let response = await fetch("https://smarthut.azurewebsites.net/api/negotiate",
        {
            method: "get",
            headers: {
                "X-MS-SIGNALR-USERID": "nath21ul@student.ju.se"
            }
        })

    let data = await response.json();
    return (data);
}

const telemetry = async () => {
    try {
        let response = await fetch("https://localhost:5000/SmartHut/BuildingInfo/GetMyBuilding")

        let data = await response.json();
        console.log(data)
        return data;
    }
    catch (e) {
        return e;
    }
}

export const runner = async () => {
    let data = await telemetry()
    console.log(data)
    return data;


}



runner();


//getSignal();

// let connection = new signalR.HubConnectionBuilder()
//     .withUrl("/wss://smarthut.service.signalr.net/client/?hub=telemetry")
//     .build();

// connection.on("send", data => {
//     console.log(data);
// });

// connection.start()
//     .then(() => connection.invoke("send", "Hello"));



const connection = new signalR.HubConnectionBuilder()
    .withUrl("/wss://smarthut.service.signalr.net/client/?hub=telemetry", {
        accessToken:
            "eyJhbGciOiJIUzI1NiIsImtpZCI6Ijc2NzA1NTIxMiIsInR5cC…yeSJ9.A9gbLHG0TqSdHEwbfD7F35vBYqoQhu9oS2gEjkXEBSo"
    })
    .configureLogging(signalR.LogLevel.Information)
    .build();

async function start() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};

connection.onclose(async () => {
    await start();
});

// Start the connection.
start();