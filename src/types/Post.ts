export interface PostDocument {
    id: string
    authorId: string
    beerId: number
    content: string
    likes: number
    stars: number
}
export interface InitialPostData {
    likes: number
    authorId: string
}

export interface CreatePostDataDto {
    content: string
}

export interface CreatePostDto
    extends InitialPostData,
        CreatePostDataDto {}
