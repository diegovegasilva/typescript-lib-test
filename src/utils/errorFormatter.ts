import { restRequestError } from '../models/rest.options.model';

export const errorFormatter = function (error: any): restRequestError {
    let errorData: restRequestError = {
        statusCode: error.status,
        message: error.response.description,
        key: error.response.key,
        data: error.response.causes
    }
    return errorData;
}