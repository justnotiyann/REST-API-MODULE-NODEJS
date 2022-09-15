import {body, validationResult} from "express-validator";

export const bodyValidator = (req, res, next) => {
	body(...req.title).minLength({min: 5}).withMessage;
};
