import {MigrationInterface, QueryRunner} from "typeorm";

export class Maratona1589065961715 implements MigrationInterface {
    name = 'Maratona1589065961715'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "maratona" ("id" varchar PRIMARY KEY NOT NULL, "aula" varchar(500) NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "maratona"`, undefined);
    }

}
