export default interface Comment{
    id: number;
    commentername: string;    
    commenterid: number;
    commentcontent: string;
    dateofcomment: Date;
    replytocomment: number;
}