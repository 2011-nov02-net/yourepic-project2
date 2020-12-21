import Category from './category'
import User from './user'
export default interface Epic{
    id: number;
    title: string;
    author: User;
    date: Date;
    datecompleted: Date;
    updatecompleted: boolean;
    categories: Category[];
    chaptercount: number;
    commentcount: number;
    ratingcount: number;
    averagerating: number;
}