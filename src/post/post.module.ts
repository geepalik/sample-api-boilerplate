import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostDao } from './post.dao';
import { PostManager } from './post.manager';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService, PostManager, PostDao]
})
export class PostModule {}
