




//simple server configuration to host resources from local system.
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//get method to open index.html at port 3000.
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');
});

//determine the root directory
//to serve static files such as images, css, scripts.
app.use(express.static(__dirname));

app.listen(port, () => console.log(`Listening on ${port}`));
