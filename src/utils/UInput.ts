import * as readlineSync from 'readline-sync';

export class UInput {
  public prompt(question: string): string {
    return readlineSync.question(question);
  }
}