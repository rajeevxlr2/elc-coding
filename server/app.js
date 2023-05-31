/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data      = require('./data');
const http      = require('http');
const hostname  = 'localhost';
const port      = 3035;

/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(function (req, res) {
    // .. Here you can create your data response in a JSON format
    let result = null;
    const url = 'http://localhost:3030';
    if(req.method == "GET") {
        const searchTerm = req.url.replace("/","");
        console.log(searchTerm);
        result = filterData(searchTerm);
    }
    res.setHeader('Access-Control-Allow-Origin', url);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(result));
    res.end(); //end the response
}).listen( port );

function filterData(tag){
    console.log("Filter1");
    if(tag === ""){
        return data;
    }
    let matchedItems = data.filter((product) => {
        let matches =  product.tags.filter((tagName) => tagName.startsWith(tag));
        return matches.length ? true : false;
    });
    console.log("Tag : ", tag,',', matchedItems.length)
    return matchedItems;
}

console.log(`[Server running on ${hostname}:${port}]`);
