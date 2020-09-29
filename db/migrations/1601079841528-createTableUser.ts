import {MigrationInterface, QueryRunner, Table} from "https://deno.land/x/typeorm@v0.2.23-rc9/mod.ts"

export class CreateTableUser1601079841528 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "name",
                    type: "varchar",
                }
            ]
        }), true);
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('user');
    }

}