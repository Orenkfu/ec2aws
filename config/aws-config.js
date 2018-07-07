const AWS = require('aws-sdk');
AWS.config.region = process.env.REGION || { region: 'eu-central-1' };
const dynamodb = new AWS.DynamoDB(AWS.config.region);
var docClient = new AWS.DynamoDB.DocumentClient(AWS.config.region);
var myKey = 'dsklbm34dja6krsfkldjasfiuqewrpqiwru2930klnzxcsvr2x';
var myBucket = 'node-sdk-testbucket-oren';

const s3 = new AWS.S3({ apiVersion: 'latest', region: 'eu-central-1' });

const bucketParams = { Bucket: process.argv[2] };


/*
s3.getBucketCors(bucketParams, (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(JSON.stringify(data));
})
*/
module.exports = {
    s3: s3,
    dbClient: docClient,
    bucketName: myBucket,
    AWS: AWS
}