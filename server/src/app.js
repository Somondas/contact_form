const express = require('express')
const app = express()
const port = 3000
const path = require("path");


// settings paths=====================================
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views")
console.log(template_path);

app.use(express.static(static_path));
app.set("view engine", "hbs")
// settings paths=====================================ends
// routes setting
app.get('/', (req, res) => {
  res.send('Hello World')
})



app.listen(port, () => {
    console.log(`Express is listening on localhost:${port}`)
})