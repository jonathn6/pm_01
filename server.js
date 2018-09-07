const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3001

app.use('/', express.static(path.join(__dirname, 'public')))

/*
Send request to the app, let it deal with 404s, etc
 */
app.use((req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

app.listen(port, () => console.log("Listening on Port", port)) 