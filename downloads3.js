const AWS = require('aws-sdk');
const fs = require('fs')

const s3 = new AWS.S3({region: 'us-east-1'});

const downloadFile = async () => {
    
    const params = {
        Bucket: 'siu-avb-bucket',
        Key: 'file-stu8-js.txt'
    };

    s3.getObject(params, (err, data) => {
        if (err) {
            throw err;
        }
        
    });
};

// const file = await s3.getObject(param).promise()
//  return {
//   data: file.Body,
//   mimetype: file.ContentType
//  }


downloadFile();