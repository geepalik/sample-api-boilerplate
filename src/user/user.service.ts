/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserDao } from './user.dao';

@Injectable()
export class UserService {
    constructor(private userDao: UserDao){}

    findAll(){
        return this.userDao.findAll();
    }
}
