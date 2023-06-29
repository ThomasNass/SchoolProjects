import HubConnectionBuilder from "@microsoft/signalr"

const connection = new HubConnectionBuilder()
    .withUrl("/wss://smarthut.service.signalr.net/client/?hub=telemetry")
    .configureLogging(LogLevel.Information)
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