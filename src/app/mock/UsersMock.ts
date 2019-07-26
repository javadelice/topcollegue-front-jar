import { User } from '../models/User';

export class UsersMock {
  private usersMock: User[] = null;

  constructor() {
    this.usersMock = [
        new User("132", "dj", "dj", "DUPONT", "Jean", "https://randomuser.me/api/portraits/men/12.jpg"),

        new User("123", "rj", "rj", "RAY", "John", "https://randomuser.me/api/portraits/men/13.jpg"),

        new User("111", "sj", "sj", "SMITH", "Jack", "https://randomuser.me/api/portraits/men/14.jpg"),

        new User("222", "mm", "mm", "MARTIN", "Martin", "https://randomuser.me/api/portraits/men/15.jpg"),

        new User("128", "dc", "dc", "DUPRE", "Céline", "https://randomuser.me/api/portraits/women/16.jpg"),

        new User("218", "dj2", "dj2", "DUVAL", "Juliette", "https://randomuser.me/api/portraits/women/17.jpg"),

        new User("112", "dm", "dm", "DESPRES", "Megane", "https://randomuser.me/api/portraits/women/18.jpg"),

        new User("107", "dm2", "dm2", "DULAC", "Maïté", "https://randomuser.me/api/portraits/women/19.jpg")];
    }

    getList(): User[] {
    return this.usersMock;
  }
}
