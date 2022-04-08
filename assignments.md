# JavaScript AWS Assignments

# Ex. 1
Create an S3 bucket with the following schema: `sia-{YOUR_STUDENT_ID}-bucket`.  This will be your student bucket.

# Ex. 2 CLI S3
Use the AWS CLI to upload a file to your student bucket.

# Ex. 3 AWS-SDK S3 
Use aws-sdk to upload a file to your student bucket.

# Ex. 4 IAM Policy Lambda
Create a Lambda function that contains the following code:

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

Create a managed policy and attach it to the execution role for your lambda function.  This new policy provides write access to your student bucket.

# Ex. 5  IAM Bucket Policy
Create a bucket policy that only allows you to upload a file from your home computer and attach it to your student bucket.

# Ex. 6 API GW
Create a POST route with the following schema: `/{STUDENT_ID}/upload`.  Create a Lambda integration that calls a Lambda file to upload a file to S3.  Attach the Lambda integration to this Route, deploy the API, and call this route using Postman.

# Ex. 7 DynamoDB Write
Create an Express web API with the following endpoint:

```
POST http://localhost:5150/customer
```

The endpoint accepts the following data and stores it into a Customer table in DynamoDB
```
{
    "customerId": <YOUR STUDENT ID>,
    "firstName": "Paul", 
    "lastName": "Simmon",
    "age": 54, 
    "zip": 23111
}

```

# Ex. 8 DynamoDB Read

Update the Express web API in Ex. 7 with the following new endpoint:

```
GET http://localhost:5150/customer/{YOUR STUDENT ID}
```

This endpoint returns all the information for this customer from DynamoDB.

Example:
```
{
    "zip": 23111,
    "firstName": "Paul",
    "lastName": "Simmons",
    "customerId": 7,
    "age": 54
}
```

# Ex. 9 Lambda
Basic

# Ex. 10 Lambda --> DDB
Create 


# Ex. 11 API GW --> Lambda --> DDB
Create the following endpoint using the API Gateway:

![](./docs/api-gw-route-ddb.png)

This endpoint connects to a lambda function that returns the first name for a customer in the Customer table.

URL:
```
GET https://js48lhu1t0.execute-api.us-east-1.amazonaws.com/dev/ddb/7
```

Output:
```
Paul
```

Lambda test event:
```
{
 "pathParameters":{"id":"7"}
}
```
