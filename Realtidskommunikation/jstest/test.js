let headers = {
    "Accept": "*/*",
    "Content-type": "application/json;charset=UTF-8",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJhcGk6Ly85NTdmZWU0Ny1kNzVhLTRmMjEtYTA3My1mNjg4MTUwNjE4MDkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85YmZhMTcwNi0xZmZjLTQ5NGQtYTYzZS1kYmJiMzRjNDc5NmIvIiwiaWF0IjoxNjYyOTczODcwLCJuYmYiOjE2NjI5NzM4NzAsImV4cCI6MTY2Mjk3NzkwOCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQVBCN1QzWHJKbHhyc3Yvck9IUUdXY0Vib0ZGbndRb0tpU2tHNzlMSWFjcVY3bUFOYVhjSkFqQXdTR3NHZXdob2k4Z1hVTTdOUGVaNGJjUEFPZlJyNzFRPT0iLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiYmJjMTI5NTItZWM3Ny00NzRkLWIxY2MtYmJkYjgzZDI4MDhmIiwiYXBwaWRhY3IiOiIwIiwiZW1haWwiOiJuYXRoMjF1bEBzdHVkZW50Lmp1LnNlIiwiZmFtaWx5X25hbWUiOiJOw6RzcyIsImdpdmVuX25hbWUiOiJUaG9tYXMiLCJncm91cHMiOlsiN2I4NGRiOWMtMmRhNy00YjZmLThjMjEtMDQ2ZTg0MGUzYjg4Il0sImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0Lzc1NjRiYzhmLTM3MzgtNGI0ZC1iZDU3LTVhMDJjYTYyMTVmYi8iLCJpcGFkZHIiOiI3OC42Ni40My4yMDEiLCJuYW1lIjoiVGhvbWFzIE7DpHNzIiwib2lkIjoiMzBmMzdjMDQtMzRhZC00Mzg4LTgyM2MtMDgxOWU4MjgyYTUyIiwicmgiOiIwLkFWOEFCaGY2bV93ZlRVbW1QdHU3Tk1SNWEwZnVmNVZhMXlGUG9IUDJpQlVHR0FsZkFLZy4iLCJzY3AiOiJhY2Nlc3NfYXNfYV91c2VyIiwic3ViIjoicU1nLV84Vk8xMC1WZDZPMkxYSllvZFlYbGU2bklQcUN0bEEyMFVSZE1ROCIsInRpZCI6IjliZmExNzA2LTFmZmMtNDk0ZC1hNjNlLWRiYmIzNGM0Nzk2YiIsInVuaXF1ZV9uYW1lIjoibmF0aDIxdWxAc3R1ZGVudC5qdS5zZSIsInV0aSI6Ink0MUVNZkNUTmtPOF9LUXRPT2htQVEiLCJ2ZXIiOiIxLjAifQ.RSxjmd5lCz_xBOZJYpRW01BixBHdVks8MbrSsA-NhKXw3y7S5e53NxsFNkvlANhJAJ-ss2wcbcQ3iM690CwRUUz0R2jNBxarSNDfeKp94_aNcbXXZ47zM8QJOu4ft1b2dc0wd2P6DqpE3DKY8BSUXiq-yvZh1FvjlUEf5VngUwy4MXVFZ5Qh05Y_POQggdVTbFPZ7aL3VXJ24Er3Jc3YeIy0EKX0Ko3E3OTTOfWCYHaXZuZZwf6lrcofXMyGW2LKe2kHPF3126Eud87tMD-Mm2jXqhLfXJJC1hereySRVtF_762iIlp7bgCGdfpWW4DkdDohIWK2gSPPqW9TwtXdbw"
}

const getData = async () => {

    const response = await fetch("https://smarthut.se/BuildingInfo/GetMyBuilding", {
        method: "GET",
        headers: headers

    });
    const data = await response.json();
    console.log(data)
}

const getData2 = async () => {

    const response = await fetch("https://smarthut.azurewebsites.net/api/negotiate", {
        method: "GET",
        "X-MS-SIGNALR-USERID": "tn900323@gmail.com",
        Accept: "*/*",
    });
    // const data = await response.json();
    console.log(response)
}

const getIt = async () => {


    const response = await fetch("https://localhost:5000/SmartHut/BuildingInfo/GetMyBuilding", {
        method: "get",
        headers: headers
    })
    const data = await response.json();
    console.log(data)
}


const caller = async () => {
    // await getData();
    await getIt();
}

caller();