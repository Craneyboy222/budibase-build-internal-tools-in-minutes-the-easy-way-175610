import AWS from 'aws-sdk';
import { logger } from '../utils/logger';

const s3 = new AWS.S3();

export const fileService = {
  async uploadFile(file: Buffer, bucketName: string, key: string) {
    try {
      const params = {
        Bucket: bucketName,
        Key: key,
        Body: file,
      };
      const data = await s3.upload(params).promise();
      logger.info('File uploaded:', data.Location);
      return data.Location;
    } catch (error) {
      logger.error('Error uploading file:', error);
      throw new Error('File upload error');
    }
  }
};