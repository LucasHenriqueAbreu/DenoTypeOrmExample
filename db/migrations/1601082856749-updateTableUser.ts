import {MigrationInterface, QueryRunner, TableColumn} from "https://deno.land/x/typeorm@v0.2.23-rc9/mod.ts"

export class UpdateTableUser1601082856749 implements MigrationInterface {
    
    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('user', new TableColumn({
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
        }));
    }
    async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('user', 'created_at');
    }

}