import { body, param } from 'express-validator';

class TodoValidator {
    checkCreateTodo() {
        return [
            body('title')
                .notEmpty()
                .withMessage('title field is required')
                .isString()
                .withMessage('value of title must be a string'),
            body('description')
                .notEmpty()
                .withMessage('description field is required')
                .isString()
                .withMessage('value of description must be a string'),
            body('priority')
                .optional()
                .isIn(['high', 'medium', 'low'])
                .withMessage('priority value must either be high, low, medium')
                .isString()
                .withMessage('value of priority must be a string'),
            body('status')
                .optional()
                .isIn(['active', 'completed', 'pending'])
                .withMessage(
                    'priority value must either be active, completed, pending',
                )
                .isString()
                .withMessage('value of status must be a string'),
            body('archived')
                .optional()
                .isIn([true, false])
                .withMessage('priority value must either be true or false')
                .isBoolean(),
        ];
    }

    checkParamId() {
        return [
            param('id')
                .notEmpty()
                .withMessage('Param id is required')
                .isMongoId()
                .withMessage('Param id is invalid'),
        ];
    }
}

export default new TodoValidator();
