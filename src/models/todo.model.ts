import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

const todoSchema = new Schema(
    {
        _id: { type: objectId, auto: true },
        title: { type: String, required: true },
        genre: { type: String, required: true },
        director: { type: String },
        country: { type: String },
        plotSummary: { type: String, required: true },
        posterURL: { type: String, required: true },
        trailerURL: { type: String },
        rating: { type: Number, default: 4 },
        releaseYear: { type: Number, required: true },
        releaseDate: { type: Date },
        createdAt: { type: Date, default: Date.now() },
        updatedAt: { type: Date, default: Date.now() },
    },
    { versionKey: false },
);

const todo = mongoose.model('todos', todoSchema);

export default todo;
