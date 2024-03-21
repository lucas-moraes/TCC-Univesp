import {ApiError} from "./ApiError.js";

export const errorResponseHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).send({success: false, status: err.status, message: err.message});
  }
}
