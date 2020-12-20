import User from './user'

export default interface Subscription{
    Publisher: User;
    Subscriber: User;
    HasNewContent: boolean;
}