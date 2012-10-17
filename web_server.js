var http = require('http')


var OnRequest = function (req,res)
{
	
	
	res.writeHeader(200,{'Content-Type':'text/plain'})
	res.write('This is My first web Page on the internet :)')
	
	res.end()
}


var server = http.createServer(OnRequest)
server.listen(8000)

