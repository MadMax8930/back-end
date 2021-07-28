const http = require('http');

const server = http.createServer((req, res) => { 
    res.end ('Voila la reponse du premier server');
});
server.listen(process.env.PORT || 3000);