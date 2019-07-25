import { Vote } from '../models/Vote';

export class VotesMock {
  private VotesMock: Vote[] = null;

  constructor() {
    this.VotesMock = [
      new Vote('132', 'true', '123'),
      new Vote('123', 'true', '111'),
      new Vote('111', 'true', '222'),
      new Vote('222', 'false', '128'),
      new Vote('128', 'false', '218'),
      new Vote('218', 'false', '112'),
      new Vote('112', 'true', '107'),
      new Vote('107', 'true', '132')];
    }

    getList(): Vote[] {
    return this.VotesMock;
  }
}
