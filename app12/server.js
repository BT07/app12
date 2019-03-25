// Get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

//to express server
const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/app12')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist//app12/index.html'));
  });

//function 2
  app.post('/queryCert',(req,res,next)=>{
    console.log('hello');
    console.log(req.body);
response={
seatno:req.body.seat_no
};

});

//function 3
/*
app.post('/addStudent',(req,res,next)=>{
    console.log('hello');
    console.log(req.body);

response={
pr_no:req.body.cert_PRno,
    cname:req.body.cert_CName,
seat:req.body.cert_Seatno,
exam:req.body.cert_examination,
year:req.body.cert_YOP,
subject:req.body.sububject
};
module.exports=response;
    var callfile=require('./filename');
    res.end(JSON.stringify(response));
});
*/

/*response={
    uName : req.body.id1,
    pwd : req.body.id2,
    };
    module.exports=response;
    var callfile=require('./creatordash');
    res.end(JSON.stringify(response));*/
   



//Get port from environment and store in Express.
const port = process.env.PORT || '4000';
app.set('port', port);

//Create HTTP server.
const server = http.createServer(app);

//Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`Server Running on localhost:${port}`));