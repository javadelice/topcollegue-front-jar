import { Vote } from '../models/Vote';

export class VotesMock {
  private VotesMock: Vote[] = null;

  constructor() {
    this.VotesMock = [
      new Vote('132', true, '123', 'https://randomVote.me/api/portraits/men/41.jpg'),
      new Vote('123', true, '111', 'https://randomVote.me/api/portraits/men/42.jpg'),
      new Vote('111', true, '222', 'https://randomVote.me/api/portraits/men/43.jpg'),
      new Vote('222', false, '128', 'https://randomVote.me/api/portraits/men/44.jpg'),
      new Vote('128', false, '218', 'https://randomVote.me/api/portraits/women/45.jpg'),
      new Vote('218', false, '112', 'https://randomVote.me/api/portraits/women/46.jpg'),
      new Vote('112', true, '107', 'https://randomVote.me/api/portraits/women/47.jpg'),
      new Vote('107', true, '132', 'https://randomVote.me/api/portraits/women/48.jpg')];
    }

    getList(): Vote[] {
    return this.VotesMock;
  }
}
