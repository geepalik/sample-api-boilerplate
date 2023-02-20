import { Injectable } from "@nestjs/common/decorators";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostDto } from "./dto/post.dto";

@Injectable()
export class PostDao{
    private posts = [];

    getAllPosts(){
        return this.posts;
    }

    createPost(createPostDto: CreatePostDto){
        const postId: number = this.posts.length + 1;
        const post: PostDto = {
            id: postId,
            ...createPostDto
        };
        this.posts.push(post);
    }
}