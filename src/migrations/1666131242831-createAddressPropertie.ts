import { MigrationInterface, QueryRunner } from "typeorm";

export class createAddressPropertie1666131242831 implements MigrationInterface {
    name = 'createAddressPropertie1666131242831'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying(255) NOT NULL, "zipCode" character varying(255) NOT NULL, "number" character varying(255) NOT NULL, "city" character varying(255) NOT NULL, "state" character varying(255) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
