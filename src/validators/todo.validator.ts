import { body, param } from 'express-validator';

class TodoValidator {
    checkCreateTodo() {
        return [body('')];
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
