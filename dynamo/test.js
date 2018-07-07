const db = require('../config/aws-config').dbClient
var params = {
    TableName: "Movies",
    KeyConditionExpression: "#title = :title",
    ExpressionAttributeNames: {
        "#title": "title"
    },
    ExpressionAttributeValues: {
        ":title": title
    }
};
const items = [];
function callback(err, result) {
    if (err) console.log('Error: ', err);
    if (result) console.log('Result: ', result);
}

function searchByTitle(callback) {
    db.query(params, callback(err, result));
}
searchByTitle(callback);