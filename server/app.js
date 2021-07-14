const express = require('express')
const app = express()
require('dotenv').config()


// const result = dotenv.config()
// if (result.error) {
//   throw result.error
// }
// console.log(result.parsed)

const port = process.env.BE_PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  res.json({ message: "hello"});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})