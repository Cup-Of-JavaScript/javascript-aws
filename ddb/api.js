// 
// File: api.js
// Auth: 
// Date: 6/30/2022
// Desc: Template used for creating an Express web API.
//
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const cors = require('cors');
const express = require('express');
const ddbProxy = require('../ddb/api');
const ddbc = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const PORT = 5152;
const app = express();

var corsOptions = {
    origin: 'http://localhost:5150',
    optionsSuccessStatus: 200
}

// Middleware...
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/customer/', cors(corsOptions), async (req, res) => {
    const r = await ddbProxy.dcInsertItem(req.body);
    res.send("ok");
});

exports.dcInsertItem = async (item) => {
    try {
        const params = {
            TableName: "Customer",
            Item: item
        };
        await ddbc.put(params).promise();
        return "ok";
    }
    catch(e) {
        console.log(e);
    }
}

app.get('/customer/:id', cors(corsOptions), async (req, res) => {
    const r = await ddbProxy.dcGetItem(Number(req.params.id));
    res.send(r.Item);
});

exports.dcGetItem = async (keyValue) => {
    try {
        const params = {
            TableName: "Customer",
            Key: {"customerId": keyValue}
        };
        return await ddbc.get(params).promise();
    }
    catch(e) {
        console.log(e);
    }
}

app.listen(PORT, () => {
    console.log(`Express Server is running on port: ${PORT}`);
});