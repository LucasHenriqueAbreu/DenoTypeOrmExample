import { User } from "../src/entities/user.entity.ts";
import { createConnection } from "https://deno.land/x/typeorm@v0.2.23-rc9/mod.ts"

export function intTypeOrm() {
    return createConnection({
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
    });
    
}