import { User } from './user';

export class Post {
  constructor(id?: string, title?: string, description?: string, user?: User) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.user = user;
  }

  userId: User['id'];
  id: string;
  title: string;
  createdAt: Date;
  description: string;
  user: User;
}
