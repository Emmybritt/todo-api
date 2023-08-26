import { Router, Request, Response } from 'express';
import envConfig from '../config/env.config';
import todoController from '../controllers/todo.controller';
import middleware from '../middleware';
import todoValidator from '../validators/todo.validator';

const router = Router();
router.get('/', (req: Request, res: Response) => {
    res.send(`Welcome to the Geogo API! ${envConfig.nodeEnv}`);
});

router.get('/todos', todoController.getAllTodo);
router.post(
    '/create/todo',
    todoValidator.checkCreateTodo(),
    middleware.handleValidationError,
    todoController.createTodo,
);

router.get(
    '/todo/:id',
    todoValidator.checkParamId(),
    middleware.handleValidationError,
    todoController.getTodoById,
);

router.delete(
    '/delete-todo/:id',
    todoValidator.checkParamId(),
    middleware.handleValidationError,
    todoController.deleteTodoById,
);

router.patch(
    '/update-todo/:id',
    todoValidator.checkParamId(),
    middleware.handleValidationError,
    todoController.updateTodo,
);
export { router };
