//
// File: ddb-proxy.js
// Auth: Martin Burolla
// Date: 4/7/2022
// Desc: Uses three types of approaches to access DynamoDB.
// Schema: 
//   Table: Customer
//   Partition Key: customerId Type: Number
//   Sort Key: <None>
//

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const ddbc = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const TABLE_NAME = "Customer";

//
// Native
//

exports.nInsert = async (customerId, firstName, lastName) => {
    const uploadParams = {
        TableName: 'Customer',
        Item: {
          'customerId' : {N: String(customerId)}, 
          'firstName' : {S: firstName},
          'lastName' : {S: lastName}
        }
    };
      
    try {
        await ddb.putItem(uploadParams).promise();
        return "ok";
    }
    catch(err) {
        console.log(err);
    }
}

exports.nGetItem = async (customerId) => {
    const getItemParams = {
        TableName: 'Customer',
        Key: {
          'customerId': {N: String(customerId)}
        },
        ProjectionExpression: 'firstName'
    };

    const r = await ddb.getItem(getItemParams).promise();
    // const b = JSON.parse(r.Item.CUSTOMER_NAME.S);
    return r;
}

//
// PartiQL
//

exports.pGetItem= async (customerId) => {
    try {
        const statement = `select * from Customer where customerId = ${customerId}`
        const r = await ddb.executeStatement({Statement: statement}).promise();
        return AWS.DynamoDB.Converter.unmarshall(r.Items[0])
    }
    catch(e) {
        console.log(e);
    }
}

exports.pInsertItem = async (customerId, firstName, lastName) => {
    try {
        const statement = `insert into Customer value {'customerId' : ${customerId}, 'firstName': '${firstName}', 'lastName': '${lastName}'}`
        const r = await ddb.executeStatement({Statement: statement}).promise();
        return "ok"
    }
    catch(e) {
        console.log(e);
    }
}

exports.pQuery = async (customerId) => {
    try {
        const statement = `select * from Customer where customerId >= ${customerId}`;
        const r = await ddb.executeStatement({Statement: statement}).promise();
        return r.Items.map(i => AWS.DynamoDB.Converter.unmarshall(i)); // Removes the data type indicators from DDB JSON ("N", "S", etc)
    }
    catch(e) {
        console.log(e);
    }
}

exports.pUpdate = async (customerId, firstName, lastName) => {
    try {
        const statement = `update Customer set firstName='${firstName}' set lastName='${lastName}' where customerId = ${customerId}`;
        const r = await ddb.executeStatement({Statement: statement}).promise();
        return "ok";
    }
    catch(e) {
        console.log(e);
    }
}

exports.pDelete = async (customerId) => {
    try {
        const statement = `delete from Customer where customerId = ${customerId}`;
        const r = await ddb.executeStatement({Statement: statement}).promise();
        return "ok";
    }
    catch(e) {
        console.log(e);
    }
}

//
// Document Client
//

exports.dcInsertItem = async (item) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Item: item
        };
        await ddbc.put(params).promise();
        return "ok";
    }
    catch(e) {
        console.log(e);
    }
}

exports.dcInsertInfoForCustomerId = async (customerId, info) => {
    try {
        const data = {
            customerId: customerId,
            info: JSON.stringify(info)
        }
        const params = {
            TableName: TABLE_NAME,
            Item: data
        };
        await ddbc.put(params).promise();
        return "ok";
    }
    catch(e) {
        console.log(e);
    }
}

exports.dcGetItem = async (keyValue) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {"customerId": keyValue}
        };
        return await ddbc.get(params).promise();
    }
    catch(e) {
        console.log(e);
    }
}

exports.dcGetInfoForCustomer = async (customerId) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {"customerId": customerId}
        };
        const r = await ddbc.get(params).promise();
        return JSON.parse(r.Item.info);
    }
    catch(e) {
        console.log(e);
    }
}

exports.dcQuery = async () => {
    try {
        var params = {
            TableName: 'Customer',
            ExpressionAttributeValues: {
              ':id': 1
            },
            KeyConditionExpression: 'customerId = :id',
        };
        return await ddbc.query(params).promise();
    }
    catch(e) {
        console.log(e);
    }
}

exports.dcUpdate = async (customerId, firstName, lastName) => {
    try {
        var params = {
            TableName: 'Customer',
            Key: {
                'customerId' : customerId
            },
            UpdateExpression: 'set firstName = :fn, lastName = :ln',
            ExpressionAttributeValues: {
              ':fn' : firstName,
              ':ln' : lastName
            }
        };
        return await ddbc.update(params).promise();
    }
    catch(e) {
        console.log(e);
    }
}

exports.dcDelete = async (customerId) => {
    try {
        var params = {
            TableName: 'Customer',
            Key: {
                'customerId' : customerId
            }
        };
        await ddbc.delete(params).promise();
        return "ok";
    }
    catch(e) {
        console.log(e);
    }
}
