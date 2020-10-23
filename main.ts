///Teste

import { App, Area } from 'https://deno.land/x/alosaur@v0.23.0/mod.ts';
import { intTypeOrm } from "./db/create-conection.ts";
import { UserController } from "./src/controllers/user.controller.ts";


await intTypeOrm();

@Area({controllers: [UserController]})
export class MainArea {}

const app = new App({
    areas: [MainArea]
});

app.listen();
