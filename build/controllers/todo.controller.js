"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = __importDefault(require("../models/todo.model"));
class TodoController {
    async getAllTodo(req, res) {
        try {
            const page = parseInt(req.query.page || '1');
            const pageSize = parseInt(req.query.pageSize || '1000');
            const title = req.query.title;
            const dueDate = parseInt(req.query.dueDate || '0');
            const priority = parseInt(req.query.priority || '0');
            const createdAt = parseInt(req.query.createdAt || '0');
            const skip = (page - 1) * pageSize;
            let query = {};
            if (title) {
                query.title = { $regex: title, $options: 'i' };
            }
            if (dueDate > 0) {
                query.dueDate = dueDate;
            }
            if (priority > 0) {
                query.priority = { $regex: priority, $options: 'i' };
            }
            if (createdAt) {
                query.createdAt = createdAt;
            }
            const movies = await todo_model_1.default.find(query).skip(skip).limit(pageSize);
            const totalCount = await todo_model_1.default.countDocuments(query);
            return res.status(200).json({
                msg: 'Todos found',
                status: true,
                movies,
                total: totalCount,
                page,
                pageSize,
            });
        }
        catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }
    async createTodo(req, res) {
        const { title, description, priority, status, dueDate, archived } = req.body;
        try {
            const newTodo = await todo_model_1.default.create({
                title,
                description,
                priority,
                status,
                dueDate,
                archived,
            });
            newTodo.save();
            return res
                .status(201)
                .json({ msg: 'Todo created successfully', status: true });
        }
        catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }
    async getTodoById(req, res) {
        const { id } = req.params;
        try {
            const result = await todo_model_1.default.findById(id);
            return res
                .status(200)
                .json({ msg: 'Todo found', result, status: true });
        }
        catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }
    async updateTodo(req, res) {
        const { id } = req.params;
        try {
            await todo_model_1.default.updateOne({ _id: id }, { ...req.body });
            return res
                .status(200)
                .json({ msg: 'Movie updated successfully', status: true });
        }
        catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }
    async deleteTodoById(req, res) {
        const { id } = req.params;
        try {
            await todo_model_1.default.deleteOne({ _id: id });
            return res
                .status(200)
                .json({ msg: 'Todo deleted successfully', status: true });
        }
        catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }
}
exports.default = new TodoController();
