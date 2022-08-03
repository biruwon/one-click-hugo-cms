// Trigger deploy 20
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'

    console.log("This is a branch!")

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject} from functions origin` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
