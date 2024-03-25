const {ApiError} = require("./ApiError.js");

const errorResponseHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).send({message: err.message});
  }
};

module.exports = {errorResponseHandler};
