const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req,res) => {
    let url = req.url;

    switch(url) {
        case '/':
            res.end('Cosqd')
        break;
        case '/posts':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Liste des articles</h1>')
        break;

        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('Erreur 404')
        break;
    }
    
});

server.listen(port, hostname);