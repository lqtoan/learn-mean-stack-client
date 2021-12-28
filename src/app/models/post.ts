import { User } from './user';

export class Post {
  constructor(id?: string, title?: string, description?: string, user?: User) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.user = user;
  }

  id: string;
  title: string;
  description: string;
  user: User;
}
