import mongoose, { Schema, Document } from 'mongoose';

interface ICategory extends Document {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema: Schema = new Schema({
    name: { type: String, required: true, unique: true, index: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

CategorySchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

export default mongoose.model<ICategory>('Category', CategorySchema);