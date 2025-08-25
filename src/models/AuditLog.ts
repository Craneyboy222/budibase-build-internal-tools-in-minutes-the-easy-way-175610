import mongoose, { Schema, Document } from 'mongoose';

interface IAuditLog extends Document {
    action: string;
    user: mongoose.Types.ObjectId;
    entity: string;
    entityId: mongoose.Types.ObjectId;
    changes: Record<string, any>;
    createdAt: Date;
}

const AuditLogSchema: Schema = new Schema({
    action: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    entity: { type: String, required: true },
    entityId: { type: Schema.Types.ObjectId, required: true },
    changes: { type: Schema.Types.Mixed, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);