import { Body, Controller, Get, Post, Put } from 'https://deno.land/x/alosaur@v0.23.0/mod.ts';
import { User } from "../entities/user.entity.ts";
import { UserService } from "../services/user.service.ts";

@Controller('/users')
export class UserController {

    constructor(private userService:UserService){}

    @Get('')
    getAll() {
        return this.userService.getAll();
    }

    // @Post('')
    // create(@Body() user: User) {
    //    return this.userService.save(user); 
    // }

    // @Put('')
    // update(@Body() user: User) {
    //     return this.userService.update(user.id, user);
    // }

}