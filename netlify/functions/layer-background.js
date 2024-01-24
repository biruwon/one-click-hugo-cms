// Trigger deploy 4
const handler = async (event) => {
  try {
    console.log("This is extra function!")

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `This is extra function!` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
