import {ApiError} from "../common/ApiError.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).send({success: false, status: err.status, message: err.message});
  }
}
