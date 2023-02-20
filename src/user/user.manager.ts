/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";

@Injectable()
export class UserManager{
    constructor(private userService: UserService){}

    findAll(){
        return this.userService.findAll();
    }
}