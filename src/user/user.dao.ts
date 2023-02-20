/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";

@Injectable()
export class UserDao{
    private users = [];

    findAll(){
        return this.users;
    }
}