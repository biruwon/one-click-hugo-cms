exports.handler = async function (event, context) {

  setTimeout(() => { 
    console.log("I am here")
  }, 20000);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello functions origin" }),
  };
}
