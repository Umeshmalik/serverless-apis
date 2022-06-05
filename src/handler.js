'use strict';
const { getCoffees } = require('./dynamoDB');

module.exports.hello = async (event) => {
  console.log('event running')
  const coffees = await getCoffees();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        randomNumber: coffees,
        message: "this is a development environment"
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
