import { Request, Response } from 'express';
import todo from '../models/todo.model';

class TodoController {
    async getAllTodo(req: Request, res: Response) {
        try {
            const page = parseInt(
                (req.query.page as string | undefined) || '1',
            );
            const pageSize = parseInt(
                (req.query.pageSize as string | undefined) || '1000',
            );
            const title = req.query.title as string | undefined;
            const dueDate = parseInt(
                (req.query.dueDate as string | undefined) || '0',
            );
            const priority = parseInt(
                (req.query.priority as string | undefined) || '0',
            );
            const createdAt = parseInt(
                (req.query.createdAt as string | undefined) || '0',
            );

            const skip = (page - 1) * pageSize;
            let query: any = {};

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

            const todos = await todo.find(query).skip(skip).limit(pageSize);
            const totalCount = await todo.countDocuments(query);

            return res.status(200).json({
                msg: 'Todos found',
                status: true,
                todos,
                total: totalCount,
                page,
                pageSize,
            });
        } catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }

    async createTodo(req: Request, res: Response) {
        const { title, description, priority, status, dueDate, archived } =
            req.body;

        try {
            const newTodo = await todo.create({
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
        } catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }

    async getTodoById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await todo.findById(id);
            return res
                .status(200)
                .json({ msg: 'Todo found', result, status: true });
        } catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }

    async updateTodo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await todo.updateOne({ _id: id }, { ...req.body });
            return res
                .status(200)
                .json({ msg: 'Movie updated successfully', status: true });
        } catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }

    async deleteTodoById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await todo.deleteOne({ _id: id });
            return res
                .status(200)
                .json({ msg: 'Todo deleted successfully', status: true });
        } catch (error) {
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }
}

export default new TodoController();
