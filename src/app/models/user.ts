export class User {
  constructor(id?: string, username?: string, password?: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
  id: string;
  username: string;
  password: string;
}
