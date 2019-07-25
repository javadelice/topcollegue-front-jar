import { User } from '../models/User';

export class UsersMock {
  private usersMock: User[] = null;

  constructor() {
    this.usersMock = [
      new User('132', 'DUPONT', 'Jean', 'https://randomuser.me/api/portraits/men/41.jpg'),
      new User('123', 'RAY', 'John', 'https://randomuser.me/api/portraits/men/42.jpg'),
      new User('111', 'SMITH', 'Jack', 'https://randomuser.me/api/portraits/men/43.jpg'),
      new User('222', 'MARTIN', 'Martin', 'https://randomuser.me/api/portraits/men/44.jpg'),
      new User('128', 'DUPRE', 'Céline', 'https://randomuser.me/api/portraits/women/45.jpg'),
      new User('218', 'DUVAL', 'Juliette', 'https://randomuser.me/api/portraits/women/46.jpg'),
      new User('112', 'DESPRES', 'Megane', 'https://randomuser.me/api/portraits/women/47.jpg'),
      new User('107', 'DULAC', 'Maïté', 'https://randomuser.me/api/portraits/women/48.jpg')];
    }

    getList(): User[] {
    return this.usersMock;
  }
}
