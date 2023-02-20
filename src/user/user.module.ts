import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserDao } from './user.dao';
import { UserManager } from './user.manager';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserManager, UserDao],
})
export class UserModule {}
