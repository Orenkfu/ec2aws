const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}..`))


const AWS = require('aws-sdk');

AWS.config.region = process.env.REGION || { region: 'eu-central-1' };

var s3 = new AWS.S3({ apiVersion: 'latest', region: 'eu-central-1' });
var myBucket = 'node-sdk-testbucket-oren';

var myKey = 'dsklbm34dja6krsfkldjasfiuqewrpqiwru2930klnzxcsvr2x';
app.use(express.static('public'))
/*
s3.createBucket({ Bucket: myBucket }, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        params = { Bucket: myBucket, Key: myKey, Body: 'Hello!' };
        s3.putObject(params, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log("Successfully uploaded data to myBucket/myKey");
            }
        });
    }
});
*/
/*
for (let i = 100; i < 110; i++) {
    s3.putObject({ Bucket: myBucket, Key: `newFile${i}.txt`, Body: `Hello World ${i}` }, (err, data) => {
        if (err)
        console.log(err)
        else
        console.log(`succesfully uploaded data: ${data} to bucket:  ${myBucket}!`);
    });
}
const params = {
    TableName: "Movies",
    KeySchema: [
        { AttributeName: "year", KeyType: "HASH" },  //Partition key
        { AttributeName: "title", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};
console.log('hi');

dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
movies.forEach(function (movie) {
    var params = {
        TableName: "Movies",
        Item: {
            "year": movie.year,
            "title": movie.title,
            "info": movie.info
        }
    };
            docClient.put(params, function (err, data) {
                if (err) {
                    console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("PutItem succeeded:", movie.title);
                }
            });
            });
*/
const dynamodb = new AWS.DynamoDB(AWS.config.region);

const movies = require('./moviedata');

var docClient = new AWS.DynamoDB.DocumentClient(AWS.config.region);



