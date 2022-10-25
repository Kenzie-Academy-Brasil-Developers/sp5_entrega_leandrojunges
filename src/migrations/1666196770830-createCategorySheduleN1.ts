import { MigrationInterface, QueryRunner } from "typeorm";

export class createCategorySheduleN11666196770830 implements MigrationInterface {
    name = 'createCategorySheduleN11666196770830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, CONSTRAINT "UQ_9004ab74b495518b3dee4f4222a" UNIQUE ("name"), CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shedules_user_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL DEFAULT now(), "hour" TIME NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_cf194732d2e84d089ad673089e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shedules_user_properties" ADD CONSTRAINT "FK_44926ff57fd92dfa922ca64dc12" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shedules_user_properties" ADD CONSTRAINT "FK_1def049410b65ff18582d38a484" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shedules_user_properties" DROP CONSTRAINT "FK_1def049410b65ff18582d38a484"`);
        await queryRunner.query(`ALTER TABLE "shedules_user_properties" DROP CONSTRAINT "FK_44926ff57fd92dfa922ca64dc12"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`DROP TABLE "shedules_user_properties"`);
        await queryRunner.query(`DROP TABLE "Categories"`);
    }

}
