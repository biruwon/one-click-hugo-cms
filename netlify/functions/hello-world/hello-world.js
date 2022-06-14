exports.handler = async function (event, context) {

  while (true) {
    console.log("here")
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello functions origin" }),
  };
}
