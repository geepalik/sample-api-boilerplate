import { Injectable } from "@nestjs/common/decorators";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Injectable()
export class PostManager{
    constructor(private postService: PostService){}

    getAllPosts(){
        return this.postService.getAllPosts();
    }

    createPost(createPostDto: CreatePostDto){
        return this.postService.createPost(createPostDto);
    }
}