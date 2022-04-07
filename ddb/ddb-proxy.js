const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

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

var queryParams = {
    TableName : "CUSTOMER_LIST",
    KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames:{
        "#yr": "year"
    },
    ExpressionAttributeValues: {
        ":yyyy": 1985
    }
};

exports.insert = async () => {
    try {
        await ddb.putItem(uploadParams).promise();
        return "ok";
    }
    catch(err) {
        console.log(err);
    }
}

exports.getItem = async () => {
    const r = await ddb.getItem(getItemParams).promise();
    const b = JSON.parse(r.Item.CUSTOMER_NAME.S);
    return b;
}

exports.queryItems = async () => {
    try {
        const statement = `select * from CUSTOMER_LIST where CUSTOMER_NAME = 'Marty Burolla' `
        const r = await ddb.executeStatement({Statement: statement}).promise();
        return AWS.DynamoDB.Converter.unmarshall(r.Items[0])
    }
    catch(e) {
        console.log(e);
    }
}
