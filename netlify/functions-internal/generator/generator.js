const handler = async (event) => {
    try {  
      console.log("This is me logging things!")
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello from a generated function` }),
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }
  }
  
  module.exports = { handler }
  