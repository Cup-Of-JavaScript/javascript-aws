const AWS = require('aws-sdk')

const S3 = new AWS.S3({region: 'us-east-1'})

const upload = async () => {
    const b = { firstName: "Joe", lastName: "Smith" };
    const buffer = Buffer.from(JSON.stringify(b), "utf-8");
    await S3.upload({ Bucket: 'sia-test-2', Key: 'joe.txt', Body: buffer }).promise()
}

upload();


// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html