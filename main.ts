import { App, Area } from 'https://deno.land/x/alosaur@v0.23.0/mod.ts';
import { UserController } from "./src/controllers/user.controller.ts";
import { runMigrations } from "./db/run.migrations.ts";
import { intTypeOrm } from "./db/inti-typeorm.ts";


await runMigrations();
await intTypeOrm();

@Area({controllers: [UserController]})
export class MainArea {}

const app = new App({
    areas: [MainArea]
});

app.listen();