import IResults from "../interface/IResults";

export default function UResults(results: IResults) {
  for (const key in results) {
    const value = results[key];
    console.log(`${key}: ${value}`);
  }
}