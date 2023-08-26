"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const env_config_1 = __importDefault(require("../config/env.config"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const middleware_1 = __importDefault(require("../middleware"));
const todo_validator_1 = __importDefault(require("../validators/todo.validator"));
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.send(`Welcome to the Geogo API! ${env_config_1.default.nodeEnv}`);
});
router.get('/todos', todo_controller_1.default.getAllTodo);
router.post('/create/todo', todo_validator_1.default.checkCreateTodo(), middleware_1.default.handleValidationError, todo_controller_1.default.createTodo);
router.get('/todo/:id', todo_validator_1.default.checkParamId(), middleware_1.default.handleValidationError, todo_controller_1.default.getTodoById);
router.delete('/delete-todo/:id', todo_validator_1.default.checkParamId(), middleware_1.default.handleValidationError, todo_controller_1.default.deleteTodoById);
router.patch('/update-todo/:id', todo_validator_1.default.checkParamId(), middleware_1.default.handleValidationError, todo_controller_1.default.updateTodo);
