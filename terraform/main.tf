provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "app_bucket" {
  bucket = "enterprise-app-backup"
  acl    = "private"
}

resource "aws_dynamodb_table" "app_state" {
  name           = "app-state"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "LockID"
  attribute {
    name = "LockID"
    type = "S"
  }
}