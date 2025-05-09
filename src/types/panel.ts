import {Source} from 'react-native-fast-image';

export enum panelAuthErrors {
  common = 'Wystąpił błąd podczas logowania. Spróbuj ponownie później.',
  tooShortEmail = 'Email jest za krótki.',
  wrongEmail = 'Podaj poprawny adres email.',
  tooShortPassword = 'Hasło jest za krótkie.',
  blankConfirmedPassword = 'Powtórz hasło.',
  differentConfirmedPassword = 'Podane przez Ciebie hasła różnią się.',
  stopped = 'Proces logowania został przerwany.',
}

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
