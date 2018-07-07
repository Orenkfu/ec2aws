const AWS = require('aws-sdk');

AWS.config.region = process.env.REGION || { region: 'us-east-1' };

s3 = new AWS.S3;
const bucketParams = { Bucket: process.argv[2] };
s3.getBucketCors(bucketParams, (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(JSON.stringify(data));
})

