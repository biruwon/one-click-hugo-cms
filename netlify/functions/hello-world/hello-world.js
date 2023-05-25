// Trigger deploy 175

const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject} from functions origin.` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
