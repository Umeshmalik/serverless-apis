const AWSSDK = require('aws-sdk');

AWSSDK.config.update({
    region: 'ap-south-1',
    accessKeyId: 'AKIAQGVUHKEQAXPBEDNH',
    secretAccessKey: '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'
});

//connect to dynamodb
const dynamodb = new AWSSDK.DynamoDB.DocumentClient();

const getCoffees = () => {
    return new Promise((resolve, reject) => {
        dynamodb.scan({
            TableName: 'Coffee'
        }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.Items);
            }
        });
    });
}

module.exports = {
    getCoffees
}