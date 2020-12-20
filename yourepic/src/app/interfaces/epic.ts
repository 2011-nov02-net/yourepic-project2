import Category from './category'
import User from './user'
export default interface Epic{
    ID: number;
    Title: string;
    Author: User;
    Date: Date;
    DateCompleted: Date;
    updateCompleted: boolean;
    Categories: Category[];
    ChapterCount: number;
    CommentCount: number;
    RatingCount: number;
    AverageRating: number;
}