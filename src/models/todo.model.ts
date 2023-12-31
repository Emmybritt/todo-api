import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

const todoSchema = new Schema(
    {
        _id: { type: objectId, auto: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        priority: { type: String },
        status: { type: String, default: 'active' },
        dueDate: { type: Date },
        archived: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now() },
        updatedAt: { type: Date, default: Date.now() },
    },
    { versionKey: false },
);

const todo = mongoose.model('todos', todoSchema);

export default todo;
