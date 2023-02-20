import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDao } from './post.dao';

@Injectable()
export class PostService {
    constructor(private postDao: PostDao){}

    getAllPosts(){
        return this.postDao.getAllPosts();
    }

    createPost(createPostDto: CreatePostDto){
        return this.postDao.createPost(createPostDto);
    }
}
