import { MigrationInterface, QueryRunner } from "typeorm";

export class updateTables1666297707403 implements MigrationInterface {
    name = 'updateTables1666297707403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_e9058266ab1b092d636b1868956"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "adressId" TO "addressId"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "zipCode" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "city" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "value" TYPE numeric(12,2)`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "value" TYPE numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "city" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "zipCode" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "addressId" TO "adressId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_e9058266ab1b092d636b1868956" FOREIGN KEY ("adressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
