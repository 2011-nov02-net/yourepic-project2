export default interface Comment{
    ID: number;
    CommenterName: string;    
    CommenterID: number;
    CommentContent: string;
    DateOfComment: Date;
    ReplyToComment: number;
}