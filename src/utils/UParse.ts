import { JSDOM } from 'jsdom';

export default async function UParse(html: string, ...targets: string[]) {
  const dom = new JSDOM(html);
  const results = targets.map(target => {
    const text = dom.window.document.querySelector(target)?.textContent;
    return text;
  });
  console.log(results);
}