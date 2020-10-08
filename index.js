var express = require('express')
var app = express()

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'))
app.get("/*", (req, res) => res.sendFile(__dirname + "/public/index.html"))
app.listen(port, () => { });

