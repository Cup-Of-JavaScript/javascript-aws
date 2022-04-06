const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params = {
  TableName: 'CUSTOMER_LIST',
  Item: {
    'CUSTOMER_ID' : {N: '001'},
    'CUSTOMER_NAME' : {S: 'Richard Doe'}
  }
};

const upload = async () => {
    try {
        await ddb.putItem(params).promise();
        console.log("ok")
    }
    catch(err) {
        console.log(err);
    }
}

upload();


