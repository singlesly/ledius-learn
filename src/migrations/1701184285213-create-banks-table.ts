import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBanksTable1701184285213 implements MigrationInterface {
  name = 'CreateBanksTable1701184285213';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "banks" (
        "id" uuid NOT NULL, 
        "name" character varying NOT NULL, 
        CONSTRAINT "PK_3975b5f684ec241e3901db62d77" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "cards" ADD "bankId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "cards" ADD CONSTRAINT "PK_5f3269634705fdff4a9935860fc" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "cvv"`);
    await queryRunner.query(
      `ALTER TABLE "cards" ADD "cvv" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "cards" ADD CONSTRAINT "FK_739a02da6f10aa517d20d6c4648" FOREIGN KEY ("bankId") REFERENCES "banks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cards" DROP CONSTRAINT "FK_739a02da6f10aa517d20d6c4648"`,
    );
    await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "cvv"`);
    await queryRunner.query(`ALTER TABLE "cards" ADD "cvv" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "cards" DROP CONSTRAINT "PK_5f3269634705fdff4a9935860fc"`,
    );
    await queryRunner.query(`ALTER TABLE "cards" DROP COLUMN "bankId"`);
    await queryRunner.query(`DROP TABLE "banks"`);
  }
}
