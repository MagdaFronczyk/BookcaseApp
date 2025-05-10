import {Source} from 'react-native-fast-image';

export type IPanelAuthForm = {
  email: string;
  password?: string;
  confirmedPassword?: string;
};

export type IPanelFormData = {
  placeholder: string;
  handler: (email: string) => void;
  inputValue: string;
  secure: boolean;
};

export type IPanelButtonData = {
  title: string;
  handler: (() => void) | undefined;
  accLabel: string;
  accHint: string;
  borderColor: string;
  backgroundColor: string;
  titleColor: string;
  icon: Source | null;
};

export interface IPanelButtonDataHashTable {
  [key: string]: IPanelButtonData;
}
