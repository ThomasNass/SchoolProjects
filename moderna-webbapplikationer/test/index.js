import franchises from "./franchises.json"

const callerId = "MuniMatch";
const key = "GsgD4yGDbIooku02ocUPatpvSug3kawuwjrxlhri";
let random = makeRandom(16);
let date = new Date();
const unixTimestamp = Math.floor(date.getTime() / 1000);



const getHash = async () => {
    hashed = await sha256(callerId + unixTimestamp + key + random);

    return hashed;
}



getData = async (headers, buisness, city) => {
    const response = await fetch(`/api/hitta/${buisness}/${city}`,
        {
            method: "GET",
            headers: headers
        });
    const data = await response.json();
    return data;
}


const hitta = async (city, buisness) => {
    let hashed = await getHash();
    let headers = {
        "Content-Type": "application/json",
        "hitta-callerid": callerId,
        "hitta-time": unixTimestamp,
        "hitta-random": random,
        "hitta-hash": hashed
    }
    let data = await getData(headers, city, buisness);
    console.log(buisness);
    if (data.result.companies.total > 0) {
        console.log(data, data.result.companies.company[0].displayName);
        return "yes";
    }
    else {
        console.log(data, "nej")
        return "no";
    }
}




function makeRandom(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

const getBuisnesses = async (city1, city2) => {
    let citiesCompared = [];
    for (const franchise in franchises.franchises) {
        let comparison = {}
        comparison.buisness = franchises.franchises[franchise];
        comparison.city1 = await hitta(city1, franchises.franchises[franchise])
        comparison.city2 = await hitta(city2, franchises.franchises[franchise])
        citiesCompared.push(comparison);
    }
    console.log(citiesCompared);

}

getBuisnesses("vetlanda", "falköping");

// franchises.franchises.forEach(franchise => {

//     hitta("vetlanda", franchise)

// })


// hitta(city, buisness);