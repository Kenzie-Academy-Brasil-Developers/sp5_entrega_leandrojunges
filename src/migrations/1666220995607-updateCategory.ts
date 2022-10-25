import { MigrationInterface, QueryRunner } from "typeorm";

export class updateCategory1666220995607 implements MigrationInterface {
    name = 'updateCategory1666220995607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Categories" DROP CONSTRAINT "UQ_9004ab74b495518b3dee4f4222a"`);
        await queryRunner.query(`ALTER TABLE "Categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "Categories" ADD "name" character varying(40) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Categories" ADD CONSTRAINT "UQ_9004ab74b495518b3dee4f4222a" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Categories" DROP CONSTRAINT "UQ_9004ab74b495518b3dee4f4222a"`);
        await queryRunner.query(`ALTER TABLE "Categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "Categories" ADD "name" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Categories" ADD CONSTRAINT "UQ_9004ab74b495518b3dee4f4222a" UNIQUE ("name")`);
    }

}
