import { ArticlesProps } from 'types/articles';

export interface AppData {
  alphabet: string[];
  articles: ArticlesProps[];
  letters: string[];
  word?: string;
}

export interface AppProviderValue {
  appData: AppData;
  setAppData: (data: AppData) => void;
  setWord: (word?: string) => void;
}

// Actions names
export const APP_DATA_SET = 'APP_DATA_SET';
export const WORD_SET = 'WORD_SET';

// Actions interfaces
interface SetAppData {
  type: typeof APP_DATA_SET;
  data: AppData;
}
interface SetWord {
  type: typeof WORD_SET;
  word?: string;
}

export type AppActionTypes = SetAppData | SetWord;
