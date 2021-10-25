var express = require('express'); 
// создаю Express-приложение; 

var app = express();
// создаю маршрут для главной страницы; http://localhost:8080;

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile('F:/Papka/Homework/index.html');
}).listen(8080);   // запускаю сервер по порту 8080;

console.log("Server is started");

app.get('/info', function(req, res){
    res.sendFile('F:/Papka/Homework/info.html')
}); 

// app.get('/getkun', function(req, res) {
//     let param = req.param('getkunparm');
//     console.log(param);
//     res.send(param);
// })

// app.post('/postkun', function(req, res) {
//     console.log(req.headers);
//     let params;
//     req.headers.forEach(element => {
//         params += elem.key;
//     });
//     let elem = '<html><head></head><body><h1>Hello!</h1>'+ req.headers +'</body></html>';
//     res.type('html');
//     res.send(elem);  // достать ключ/значение хедеров и параметром
// });

console.log("INFO is started");