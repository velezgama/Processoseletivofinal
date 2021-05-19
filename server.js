'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');var msg = 'hello world';
console.log(msg);

const fetch = require('node-fetch')
const url = `https://api.github.com/orgs/takenet/repos?per_page=2`
const url1= 'https://api.github.com/orgs/takenet/repos?per_page=1'
const url2= 'https://api.github.com/orgs/takenet/repos?per_page=2'
const url3= 'https://api.github.com/orgs/takenet/repos?per_page=3'
const url4= 'https://api.github.com/orgs/takenet/repos?per_page=4'
const url5= 'https://api.github.com/orgs/takenet/repos?per_page=5'

fetch(url)
    .then(result => result.json())
    .then((json) => console.log(json.map(repo=> repo.name)));

}).listen(port);
