import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt: any): string {
  let randomPrompt: string | null = null;

  const randomeIndex: number = Math.floor(
    Math.random() * surpriseMePrompts.length,
  );
  randomPrompt = surpriseMePrompts[randomeIndex];

  if (randomPrompt === prompt) {
    randomPrompt = getRandomPrompt(prompt);
  }

  return randomPrompt;
}

export async function downloadImage(_id: string, photo: string) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
