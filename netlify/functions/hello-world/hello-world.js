// Trigger deploy 137
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'

    console.log("This is me logging things!")

    const value = process.env.AWS_LAMBDA_JS_RUNTIME;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject} from functions origin. Value of AWS_LAMBDA_JS_RUNTIME is ${value}.` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
