//
// File: ddb-proxy.js
// Auth: Martin Burolla
// Date: 4/7/2022
// Desc: Uses three types of approaches to access DynamoDB.
// Schema: 
//   Table: Customer
//   Partition Key: customerId
//   Sort Key: <None>
//

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const ddbc = new AWS.DynamoDB.DocumentClient;
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const TABLE_NAME = "Customer";

//
// Native
//

const d = {
    firstName: "Marty", 
    lastName: "Burolla", 
    cats: ['Gypsy']
}

const uploadParams = {
  TableName: 'CUSTOMER_LIST',
  Item: {
    'CUSTOMER_ID' : {N: '003'}, 
    'CUSTOMER_NAME' : {S: JSON.stringify(d)}
  }
};

const getItemParams = {
    TableName: 'CUSTOMER_LIST',
    Key: {
      'CUSTOMER_ID': {N: '003'}
    },
    ProjectionExpression: 'CUSTOMER_NAME'
};

const queryParams = {
    TableName : "CUSTOMER_LIST",
    KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames:{
        "#yr": "year"
    },
    ExpressionAttributeValues: {
        ":yyyy": 1985
    }
};

exports.nInsert = async () => {
    try {
        await ddb.putItem(uploadParams).promise();
        return "ok";
    }
    catch(err) {
        console.log(err);
    }
}

exports.nGetItem = async () => {
    const r = await ddb.getItem(getItemParams).promise();
    const b = JSON.parse(r.Item.CUSTOMER_NAME.S);
    return b;
}

//
// PartiQL
//

exports.pQueryItems = async (customerName) => {
    try {
        const statement = `select * from CUSTOMER_LIST where CUSTOMER_NAME = '${customerName}'`
        const r = await ddb.executeStatement({Statement: statement}).promise();
        return AWS.DynamoDB.Converter.unmarshall(r.Items[0])
    }
    catch(e) {
        console.log(e);
    }
}

exports.pInsertItem = async (item) => {
    try {
        const statement = `insert into CUSTOMER_LIST value ${JSON.stringify(item)}`
        const r = await ddb.executeStatement({Statement: statement}).promise();
        return AWS.DynamoDB.Converter.unmarshall(r.Items[0])
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

exports.dcGetItem = async (keyValue) => {
    try {
        const params = {
            TableName: TABLE_NAME,
            Key: {"customerId": keyValue}
        };
        let r = await ddbc.get(params).promise();
        return r;
    }
    catch(e) {
        console.log(e);
    }
}
