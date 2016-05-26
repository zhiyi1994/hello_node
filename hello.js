var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8080);

app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'victor_first_bot') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');
  }
});


console.log('Server started');
