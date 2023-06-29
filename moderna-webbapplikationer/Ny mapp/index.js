// import axios from "axios";

const mockholm = "https://retoolapi.dev/raa5PL/mockholm/1";
const snubbe = "data.json"




const getData = async () => {
    await axios.get("http://localhost:3000/cities").then(repsonse => {
        console.log(repsonse.data);
    }, error => {
        console.log(error)
    });
}

getData();