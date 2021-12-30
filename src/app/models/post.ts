import { User } from './user';

export class Post {
  constructor(_id?: string, title?: string, description?: string, user?: User) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.user = user;
  }

  userId: User['id'];
  _id: string;
  title: string;
  createdAt: Date;
  description: string;
  user: User;
}
