import { ArticlesProps } from 'types/articles';

export interface AppData {
  alphabet: string[];
  articles: ArticlesProps[];
  letters: string[];
  preview: boolean;
  runLetter?: string;
  word?: string;
}

export interface AppProviderValue {
  appData: AppData;
  setAppData: (data: AppData) => void;
  setLetter: (runLetter: string) => void;
  setWord: (word?: string) => void;
  togglePreview: () => void;
}

// Actions names
export const APP_DATA_SET = 'APP_DATA_SET';
export const LETTER_SET = 'LETTER_SET';
export const PREVIEW_TOGGLE = 'PREVIEW_TOGGLE';
export const WORD_SET = 'WORD_SET';

// Actions interfaces
interface SetAppData {
  type: typeof APP_DATA_SET;
  data: AppData;
}
interface SetLetter {
  type: typeof LETTER_SET;
  runLetter: string;
}
interface SetWord {
  type: typeof WORD_SET;
  word?: string;
}
interface TogglePreview {
  type: typeof PREVIEW_TOGGLE;
}

export type AppActionTypes = SetAppData | SetLetter | SetWord | TogglePreview;
