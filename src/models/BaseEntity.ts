import { Schema, Document } from 'mongoose';

interface IBaseEntity extends Document {
    createdAt: Date;
    updatedAt: Date;
}

const BaseEntitySchema: Schema = new Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

BaseEntitySchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

export { IBaseEntity, BaseEntitySchema };