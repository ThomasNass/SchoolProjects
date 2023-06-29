//Import av paketet HTTP
let http = require('http');

//createServer tar två parametrar; req(request) och res(response)
//
http.createServer(function (req, res) {

    //head-information så att webbläsaren vet hur den ska tolka formatet
    //Content-Type hade likaväl kunnat vara JSON
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('Hello, World Wide Web!');

}).listen(1337);
//createServer kräver att man specificerar vilken port som ska lyssnas till i slutet


console.log("Server startad, besök mig via localhost:1337");