import User from './user'

export default interface Subscription{
    publisher: User;
    subscriber: User;
    hasnewcontent: boolean;
}