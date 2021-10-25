const http = require('http');
const { fileURLToPath } = require('url');

let h = (r) => {
    let rc = '';
    for (key in r.headers) rc += '<h3>'+key+':'+ r.headers[key]+'</h3>'; 
    return rc;
}

http.createServer(function(request,response){
    
}).listen(3000);

console.log('Server running at http://localhost:3000/');