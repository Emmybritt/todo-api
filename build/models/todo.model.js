"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const objectId = mongoose_1.default.Schema.ObjectId;
const todoSchema = new Schema({
    _id: { type: objectId, auto: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String },
    status: { type: String, default: 'notStarted' },
    dueDate: { type: Date },
    archived: { type: String, default: 0 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
}, { versionKey: false });
const todo = mongoose_1.default.model('todos', todoSchema);
exports.default = todo;
