/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UserManager } from './user.manager';

@Controller('user')
export class UserController {
    constructor(private userManager: UserManager){}

    @Get()
    findAll(){
        return this.userManager.findAll();
    }
}
