exports.getRandomNumber = function(event, context, callback) {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getRandomNumber only accept GET method, you tried: ${event.httpMethod}`);
    }
    
    const randomNumber = Math.floor(Math.random() * 10000);

    const response = {
        statusCode: 200,
        body: JSON.stringify(randomNumber)
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    callback(null, response);
}