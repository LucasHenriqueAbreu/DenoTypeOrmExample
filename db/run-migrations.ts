import { createConnection } from "https://deno.land/x/typeorm@v0.2.23-rc9/mod.ts"
import { User } from "../src/entities/user.entity.ts";


export async function runMigrations() {
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "denotypeormexampledb",
        logging: ["query", "error"],
        entities: [
            User,
        ],
        migrations: [
            '/home/oem/workspaceaulas/controledevesao/projetos/DenoTypeOrmExample/db/migrations/*{.js,.ts}'
        ]
    });
    
    // run all migrations
    var migrations = await connection.runMigrations();
    console.log(migrations);
    await connection.close();
}