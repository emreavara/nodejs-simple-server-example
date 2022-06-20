var http = require('http')

http.createServer(function(request, response){
    response.write(200, {'Content-Type':'text/html'})
    response.end("Hello")
}).listen(5039)