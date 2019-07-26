import { Vote } from '../models/Vote';

export class VotesMock {
  private VotesMock: Vote[] = null;

  constructor() {
    this.VotesMock = [
        new Vote("132", "positif", "123"),
        new Vote("132", "positif", "123"),
        new Vote("132", "positif", "123"),
        new Vote("132", "positif", "123"),
        new Vote("132", "positif", "123"),
        new Vote("132", "positif", "123"),
        new Vote("132", "positif", "123"),
        new Vote("132", "positif", "123"),
        new Vote("132", "positif", "123")];


    }

    getList(): Vote[] {
    return this.VotesMock;
  }
}
