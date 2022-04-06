# JavaScript AWS Assignments

# Ex. 1 CLI S3
Use the AWS CLI to upload a file to the following S3 bucket: `sia-test-2`.

# Ex. 2 AWS-SDK S3 
Use aws-sdk to upload a file to the following S3 bucket: `sia-test-2`.

# Ex. 3 IAM Policy Lambda
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

Name your function using the following schema: sia-{your initials}-upload-s3

Create a managed policy and attach it to the execution role for your lambda function.  This new policy provides write access to the S3 bucket: `sia-test-2`.

# Ex. 4  IAM Bucket Policy
Create an S3 bucket with the following naming schema: `sia-<your initials>-secure-upload`.

Create a bucket policy that only allows you to upload a file from your home computer and attach it to this bucket.

# Ex. 5 API GW



