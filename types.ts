
import { STORY_PAGES } from './constants/storyData';

export type PageId = typeof STORY_PAGES[keyof typeof STORY_PAGES];

export interface Choice {
  text: string;
  nextPageId: PageId;
}

export interface StoryPageData {
  id: PageId;
  title: string;
  story: string;
  illustrationPrompt: string;
  question: string;
  choices: Choice[];
  isEnding: boolean;
}

export type StoryData = Record<PageId, StoryPageData>;
