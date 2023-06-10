export default class CName {

  total_votes: number;
  current_average: number;

  constructor(total_votes : number,  current_average : number) {
    this.total_votes = total_votes;
    this.current_average = current_average;
  }

  /** Get the number of vote to get a new average
   * @param new_average The new average
   * @param new_vote The new vote
   * @returns The number of vote to get a new average
  */
  public getVoteForNewAverage(target_average: number, new_vote: number) {
    return ((this.total_votes * this.current_average - target_average * this.total_votes) / (target_average - new_vote));
  }
}