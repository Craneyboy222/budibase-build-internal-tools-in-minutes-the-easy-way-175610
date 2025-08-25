/* Queue utilities */
import { Queue, Worker } from 'bullmq';

export const queue = new Queue('taskQueue', {
  connection: {
    host: 'localhost',
    port: 6379
  }
});

export const addTaskToQueue = async (taskName: string, data: any) => {
  await queue.add(taskName, data);
};

export const processQueue = (taskName: string, callback: (data: any) => Promise<void>) => {
  new Worker(taskName, async job => {
    await callback(job.data);
  });
};