function calculateStats1(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);

    const n = sortedArr.length;
    console.log("n:", n)
    const min = sortedArr[0];
    const max = sortedArr[n - 1];
    const sum = sortedArr.reduce((acc, val) => acc + val, 0);
    console.log("sum: ", sum)
    const mean = sum / n;
    const median = n % 2 === 0 ? (sortedArr[n / 2 - 1] + sortedArr[n / 2]) / 2 : sortedArr[Math.floor(n / 2)];

    const numbers = GetQuantiles(sortedArr);
    let lowerBound = numbers.q1 - 1.5 * numbers.iqr;
    let upperBound = numbers.q3 + 1.5 * numbers.iqr;
    console.log("Q1:", numbers.q1);
    console.log("Q3:", numbers.q3);
    console.log("IQR:", numbers.iqr);
    console.log('Lägsta värdet:', min);
    console.log('Högsta värdet:', max);
    console.log('Medelvärde:', mean);
    console.log('Median:', median);
    console.log('Gränsvärden Outliers');
    console.log('Lägre:', lowerBound);
    console.log('Övre:', upperBound);
    console.log(`
    Värdena sorterade:


    Q1:${numbers.q1}
    Q3:${numbers.q3}            
    IQR:${numbers.iqr}            
    Lägsta värdet:${min}            
    Högsta värdet:${max}            
    Medelvärde:${mean}            
    Median:${median} 
    Gränsvärden Outliers
    Lägre:${lowerBound}          
    Övre:${upperBound}          
    `);
}

let array = [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1300, 1300
];

function GetQuantiles(data) {
    let numbers = {}
    if (data.length % 2 === 0) {
        const middleIndex = Math.ceil(data.length / 2)
        const firstHalf = data.splice(0, middleIndex);
        const secondHalf = data.splice(-middleIndex);
        if (firstHalf.length % 2 !== 0) {

            q1 = getQuantile(firstHalf)
            q3 = getQuantile(secondHalf)
            IQR = q3 - q1;

            numbers.q1 = q1;
            numbers.q3 = q3;
            numbers.iqr = IQR;
        }
        return numbers;
    }
}

function getQuantile(arr) {
    let lowerPos = (arr.length / 2) - .5;
    console.log(lowerPos);
    let higherPos = lowerPos + 1;
    let Q = (arr[lowerPos - 1] + arr[higherPos - 1]) / 2
    return Q;
}

// calculateStats1(array);




function extractAndSortDurations(text) {
    const regex = /Duration: (\d+(?:[,\.]\d+)?)\s*(ms|sec)/g;
    let match;
    const durations = [];

    while ((match = regex.exec(text)) !== null) {
        let value = parseFloat(match[1].replace(',', '.'));
        const unit = match[2];
        if (unit === "sec") {
            value *= 1000;
        }
        durations.push(value);
    }

    // durations.sort((a, b) => a - b);
    return durations;
}

const text = `    Värdena sorterade:
3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3700, 3700, 3700, 3700, 3700, 4100, 4100, 4100, 4100, 4200, 4200, 4200, 4200, 4200

    Q1:3600
    Q3:4100            
    IQR:500            
    Lägsta värdet:3600            
    Högsta värdet:4200            
    Medelvärde:3783.3333333333335            
    Median:3600 
    Gränsvärden Outliers
    Lägre:2850          
    Övre:4850


1,9 min 30 körningar 

AnvanderAvbryter
   Source: NyKund.feature line 29

Test has multiple result outcomes
   30 Passed

Results

    Iteration 30)   AnvanderAvbryter 
      Duration: 4,1 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 29)   AnvanderAvbryter 
      Duration: 4,2 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,1s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,1s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 28)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 27)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 26)   AnvanderAvbryter 
      Duration: 4,2 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 25)   AnvanderAvbryter 
      Duration: 3,7 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 24)   AnvanderAvbryter 
      Duration: 3,7 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,1s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,1s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 23)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 22)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 21)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 20)   AnvanderAvbryter 
      Duration: 4,1 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 19)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 18)   AnvanderAvbryter 
      Duration: 4,1 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 17)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 16)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 15)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 14)   AnvanderAvbryter 
      Duration: 3,7 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,1s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,1s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 13)   AnvanderAvbryter 
      Duration: 4,2 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,1s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,1s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 12)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 11)   AnvanderAvbryter 
      Duration: 4,1 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 10)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 9)   AnvanderAvbryter 
      Duration: 3,7 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 8)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 7)   AnvanderAvbryter 
      Duration: 3,7 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 6)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 5)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


    Iteration 4)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 3)   AnvanderAvbryter 
      Duration: 4,2 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 2)   AnvanderAvbryter 
      Duration: 3,6 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,1s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,0s)


    Iteration 1)   AnvanderAvbryter 
      Duration: 4,2 sec

      Standard Output: 
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)


TestContext Messages:
Givet att användaren har navigerat till kundsidan
-> done: NyKundSteps.GivetAttAnvandarenHarNavigeratTillKundsidan() (0,3s)
Och att användaren klickar på knappen för att lägga till en ny kund
-> done: NyKundSteps.WhenAnvanderenKlickerPaKnappForAttLaggaTillEnNyKund() (0,0s)
Givet att användaren skriver in data för den nya kunden
  --- table step argument ---
  | fält | innehåll |
  | Namn | kund1    |
-> done: NyKundSteps.GivenAttAnvandarenSkriverInDataForDenNyaKunden(<table>) (0,6s)
När användaren väljer att avbryta
-> done: NyKundSteps.WhenAnvanderenValjerAttAvbryta() (0,0s)
Så visas kunden "kund1" inte i listan
-> done: NyKundSteps.ThenVisasKundenInteILIstan("kund1") (1,1s)



`;

const sortedDurations = extractAndSortDurations(text);
sortedDurations.reverse();
console.log(sortedDurations);

calculateStats1(sortedDurations)


function withoutOutliers(sortedArr) {
    const n = sortedArr.length;
    console.log("n:", n)
    const min = sortedArr[0];
    const max = sortedArr[n - 1];
    const sum = sortedArr.reduce((acc, val) => acc + val, 0);
    console.log("sum: ", sum)
    const mean = sum / n;
    const median = n % 2 === 0 ? (sortedArr[n / 2 - 1] + sortedArr[n / 2]) / 2 : sortedArr[Math.floor(n / 2)];

    console.log(`
             
    Lägsta värdet:${min}            
    Högsta värdet:${max}            
    Medelvärde:${mean}            
    Median:${median} 
        `);

}

let shortArr = [910, 910, 912, 915, 915, 920, 924, 924, 932, 940, 944, 949, 951, 964, 976, 984, 1000, 1000, 1000, 1000, 1000, 1000, 1100, 1100, 1100, 1100, 1100, 1100, 1100]

let str = "2600, 2600, 2600, 2600, 2700, 2600, 2600, 2600, 2600, 2600, 3100, 2600, 2600, 2600, 2600, 2600, 2600, 2600, 2700, 2600, 2600, 2600, 2600, 2600, 2600, 2600, 2600, 2600, 2600, 2600";

function replaceCommaWithSemicolonAndRemoveSpaces(str) {
    console.log(str.replace(/,\s*/g, ';'))
}

replaceCommaWithSemicolonAndRemoveSpaces(str)
//withoutOutliers(shortArr);