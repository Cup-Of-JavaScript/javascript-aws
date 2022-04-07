//
// File: ex5.js
// Auth: Martin Burolla
// Date: 4/7/2022
// Desc: 
//

const cors = require('cors');
const express = require('express');
const ddbProxy = require('../ddb/ddb-proxy');

const PORT = 5150;
const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

// Middleware...
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/customer', cors(corsOptions), async (req, res) => {
    const r = await ddbProxy.dcInsertItem(req.body);
    res.send("ok");
});

app.get('/customer/:id', cors(corsOptions), async (req, res) => {
    const r = await ddbProxy.dcGetItem(Number(req.params.id));
    res.send(r.Item);
});

app.listen(PORT, () => {
    console.log(`Express Server is running on port: ${PORT}`);
});
