const express = require('express')
const app = express()
require('dotenv').config()
const {spawn} = require('child_process');


// app.use(function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "http://localhost");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// });

// const result = dotenv.config()
// if (result.error) {
//   throw result.error
// }
// console.log(result.parsed)

const port = process.env.BE_PORT

app.get('/python', (req, res) => {
 
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python', ['test.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
   console.log('Pipe data from python script ...');
   dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  // send data to browser
  res.send(dataToSend)
  console.log(dataToSend)
  });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  res.json({ message: "i hace snaids", message2: "test"});
  console.log("i sent data")
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})