import { IsString, IsNumber } from "class-validator";

export class CreatePostRequest {
    @IsString()
    readonly title: string;
    @IsString()
    readonly slug: string;
    @IsNumber()
    readonly userId: number;
}