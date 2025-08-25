import mongoose, { Schema, Document } from 'mongoose';

interface INotification extends Document {
    user: mongoose.Types.ObjectId;
    message: string;
    read: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const NotificationSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

NotificationSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

export default mongoose.model<INotification>('Notification', NotificationSchema);