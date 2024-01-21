import http from 'http';
import * as fs from "fs";
import {PORT} from "./constant";

const server = http.createServer((req, res) => {
    console.log(req.url);

    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write('<h1>Hello World</h1>');
    // res.end();

    // const data = {name: "Harley", age: 24, city: "London"};
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.write(JSON.stringify(data));
    // res.end();

    if(req.url === '/'){
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(htmlFile);
        return;
    } else if(req.url?.endsWith('.css')){
        res.writeHead(200, { 'Content-Type': 'text/css' })
    } else if(req.url?.endsWith('.js')){
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
    } else{
        res.writeHead(404, { 'Content-Type': "application/json" })
        res.write(JSON.stringify({message: "404 - Not Found"}));
        res.end();
    }

    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.end(responseContent);

});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});