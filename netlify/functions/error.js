module.exports.handler = async () => {
    doesNotExist();
  
    return {
      statusCode: 200,
      body: `I will throw`,
    };
};