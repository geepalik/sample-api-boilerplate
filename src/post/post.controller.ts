import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common/decorators';
import { CreatePostDto } from './dto/create-post.dto';
import { CreatePostRequest } from './dto/requests/create-post.request';
import { PostManager } from './post.manager';

@Controller('post')
export class PostController {
    constructor(private postManager: PostManager){}

    @Get()
    getAllPosts(){
        return this.postManager.getAllPosts();
    }

    @Post()
    cretePost(@Body() createPostRequest: CreatePostRequest){
        return this.postManager.createPost(createPostRequest);
    }
}
