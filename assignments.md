# JavaScript AWS Assignments

# Ex. 1 CLI S3
Use CLI to upload a file to S3

# Ex. 2 AWS-SDK S3 
Use aws-sdk to upload a file to S3

# Ex. 3 API GW
Create a lambda function that contains the following code:

```
var AWS = require('aws-sdk');

const S3 = new AWS.S3({region: 'us-east-1'});

exports.handler = async (event) => {
    const b = { firstName: "Joe", lastName: "Smith" };
    const buffer = Buffer.from(JSON.stringify(b), "utf-8");
    await S3.upload({ Bucket: 'sia-test-2', Key: 'joe.txt', Body: buffer }).promise();
    return "ok";
};

```

Modify the execution role for this lambda function to enable this function to upload a file to
the S3 bucket: `sia-test-2`
