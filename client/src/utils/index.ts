import { surpriseMePrompts } from "../constants";

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
