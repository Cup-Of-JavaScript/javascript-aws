const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const d = {
    firstName: "Marty", 
    lastName: "Burolla"
}


const uploadParams = {
  TableName: 'CUSTOMER_LIST',
  Item: {
    'CUSTOMER_ID' : {N: '003'},
    'CUSTOMER_NAME' : {S: JSON.stringify(d)}
  }
};

const queryParams = {
    TableName: 'CUSTOMER_LIST',
    Key: {
      'CUSTOMER_ID': {N: '003'}
    },
    ProjectionExpression: 'CUSTOMER_NAME'
};

const insert = async () => {
    try {
        await ddb.putItem(uploadParams).promise();
        console.log("ok")
    }
    catch(err) {
        console.log(err);
    }
}

const getItem = async () => {
    const r = await ddb.getItem(queryParams).promise();
    const b = JSON.parse(r.Item.CUSTOMER_NAME.S);
    console.log(b);
}

insert();
//getItem();
