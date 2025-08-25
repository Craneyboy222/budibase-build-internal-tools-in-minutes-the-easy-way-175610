import { BaseRepository } from './BaseRepository';
import { AuditLog } from '../models/AuditLog';

export class AuditLogRepository extends BaseRepository<AuditLog> {
  constructor() {
    super('audit_logs');
  }

  async findByAction(action: string): Promise<AuditLog[]> {
    try {
      return await this.collection.find({ action }).toArray();
    } catch (error) {
      console.error('Error finding audit logs by action:', error);
      throw new Error('Database find operation failed');
    }
  }

  async addAuditLog(auditLog: AuditLog): Promise<AuditLog> {
    try {
      const result = await this.collection.insertOne(auditLog);
      return result.ops[0];
    } catch (error) {
      console.error('Error adding audit log:', error);
      throw new Error('Database insert operation failed');
    }
  }

  // Additional audit log-specific methods...
}