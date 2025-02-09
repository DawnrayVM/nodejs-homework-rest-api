import {
    CustomError,
    ValidationError,
    WrongParametersError,
    NotAuthorizedError,
} from './error.js';

const asyncWrapper = controller => {
    return (req, res, next) => {
        controller(req, res).catch(next);
    };
};

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.status).json({ message: err.message });
    }
    res.status(404).json({ message: err.message });
};

export { asyncWrapper, errorHandler };
