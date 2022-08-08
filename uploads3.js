const AWS = require('aws-sdk');
const fs = require('fs')

const s3 = new AWS.S3({region: 'us-east-1'});

const uploadFile = () => {
    
    const fileContent = fs.readFileSync('upload-file-stu8-js.txt')

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'siu-avb-bucket',
        Key: 'file-stu8-js.txt', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, (err, data) => {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};


uploadFile();