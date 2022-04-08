const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event) => {

    try {
        const getItemParams = {
            TableName: 'Customer',
            Key: {
              'customerId': {N: String(event.pathParameters.id)}
            },
            ProjectionExpression: 'firstName'
        };
    
        const r = await ddb.getItem(getItemParams).promise();
        
        const response = {
            statusCode: 200,
            body: JSON.stringify(r.Item.firstName.S),
        };
        
        return response;
    }
    catch(e) {
        console.log(e)
    }
};
