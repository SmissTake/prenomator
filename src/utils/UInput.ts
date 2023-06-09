import * as readlineSync from 'readline-sync';

export class UInput {
  public prompt(question: string, defaultValue?: string): string {
    const answer = readlineSync.question(`${question} (${defaultValue || ''}) `);
    return answer || defaultValue || '';
  }
}