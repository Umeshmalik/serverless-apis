exports.getRandomNumber = function(event) {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getRandomNumber only accept GET method, you tried: ${event.httpMethod}`);
    }
    
    const randomNumber = Math.floor(Math.random() * 100);

    const response = {
        statusCode: 200,
        body: JSON.stringify(randomNumber)
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}