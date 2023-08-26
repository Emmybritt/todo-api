"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TodoValidator {
    checkCreateTodo() {
        return [(0, express_validator_1.body)('')];
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
