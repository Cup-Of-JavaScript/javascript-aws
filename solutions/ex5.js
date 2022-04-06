const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const uploadParams = {
  TableName: 'CUSTOMER_LIST',
  Item: {
    'CUSTOMER_ID' : {N: '001'},
    'CUSTOMER_NAME' : {S: 'Richard Doe'}
  }
};

const queryParams = {
    TableName: 'CUSTOMER_LIST',
    Key: {
      'CUSTOMER_ID': {N: '001'}
    },
    ProjectionExpression: 'CUSTOMER_NAME'
};


const upload = async () => {
    try {
        await ddb.putItem(uploadParams).promise();
        console.log("ok")
    }
    catch(err) {
        console.log(err);
    }
}

const query = async () => {
    const r = await ddb.getItem(queryParams).promise();
    console.log(r);
}

//upload();
query();

// aws dynamodb get-item --table-name CUSTOMER_LIST --key file://keyfile.json