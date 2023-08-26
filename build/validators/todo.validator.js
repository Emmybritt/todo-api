"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TodoValidator {
    checkCreateTodo() {
        return [
            (0, express_validator_1.body)('title')
                .notEmpty()
                .withMessage('title field is required')
                .isString()
                .withMessage('value of title must be a string'),
            (0, express_validator_1.body)('description')
                .notEmpty()
                .withMessage('description field is required')
                .isString()
                .withMessage('value of description must be a string'),
            (0, express_validator_1.body)('priority')
                .optional()
                .isIn(['high', 'medium', 'low'])
                .withMessage('priority value must either be high, low, medium')
                .isString()
                .withMessage('value of priority must be a string'),
            (0, express_validator_1.body)('status')
                .optional()
                .isIn(['active', 'completed', 'pending'])
                .withMessage('priority value must either be active, completed, pending')
                .isString()
                .withMessage('value of status must be a string'),
            (0, express_validator_1.body)('archived')
                .optional()
                .isIn([true, false])
                .withMessage('priority value must either be true or false')
                .isBoolean(),
        ];
    }
    checkParamId() {
        return [
            (0, express_validator_1.param)('id')
                .notEmpty()
                .withMessage('Param id is required')
                .isMongoId()
                .withMessage('Param id is invalid'),
        ];
    }
}
exports.default = new TodoValidator();
