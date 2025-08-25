import { Notification } from '../models/notification';
import { Logger } from '../utils/logger';
import { WebSocketServer } from '../utils/webSocketServer';

export class NotificationService {
  private logger: Logger;
  private webSocketServer: WebSocketServer;

  constructor(webSocketServer: WebSocketServer) {
    this.logger = new Logger('NotificationService');
    this.webSocketServer = webSocketServer;
  }

  async sendNotification(userId: string, message: string): Promise<void> {
    try {
      const notification = new Notification({ userId, message });
      await notification.save();
      this.webSocketServer.send(userId, message);
      this.logger.info('Notification sent', { userId, message });
    } catch (error) {
      this.logger.error('Error sending notification', { error });
      throw new Error('Unable to send notification');
    }
  }

  // Additional notification-related methods with real-time support...
}
