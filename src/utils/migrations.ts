import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1610000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "users" (
      "id" SERIAL PRIMARY KEY,
      "username" VARCHAR(50) NOT NULL,
      "password" VARCHAR(100) NOT NULL,
      "roleId" INTEGER REFERENCES "roles"("id")
    )`);
    await queryRunner.query(`CREATE TABLE "roles" (
      "id" SERIAL PRIMARY KEY,
      "roleName" VARCHAR(50) NOT NULL
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "roles"`);
  }
}