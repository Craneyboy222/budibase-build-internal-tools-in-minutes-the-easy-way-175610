import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
    user: mongoose.Types.ObjectId;
    products: { product: mongoose.Types.ObjectId; quantity: number; }[];
    totalAmount: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, min: 1 }
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

OrderSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

export default mongoose.model<IOrder>('Order', OrderSchema);