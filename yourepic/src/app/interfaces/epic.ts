import Category from './category'
import User from './user'
export default interface Epic{
    id: number;
    title: string;
    author: User;
    date: Date;
    dateCompleted: Date;
    updateCompleted: boolean;
    categories: Category[];
    chapterCount: number;
    commentCount: number;
    ratingCount: number;
    averageRating: number;
}