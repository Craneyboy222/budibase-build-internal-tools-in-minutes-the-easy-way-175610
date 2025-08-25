/* Storage utilities */
import { S3 } from 'aws-sdk';

const s3 = new S3();

export const uploadFile = async (bucket: string, key: string, body: Buffer) => {
  await s3.upload({
    Bucket: bucket,
    Key: key,
    Body: body
  }).promise();
};

export const getFile = async (bucket: string, key: string) => {
  return s3.getObject({
    Bucket: bucket,
    Key: key
  }).promise();
};