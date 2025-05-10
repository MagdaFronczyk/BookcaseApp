import {moderateScale} from 'react-native-size-matters';

//navigation
export const BOTTOM_TAB_HEIGHT = moderateScale(55);
export const TOP_TAB_HEIGHT = moderateScale(40);

//panel
export const panelAuthErrors = {
  common: 'Wystąpił błąd podczas logowania. Spróbuj ponownie później.',
  tooShortEmail: 'Email jest za krótki.',
  wrongEmail: 'Podaj poprawny adres email.',
  tooShortPassword: 'Hasło jest za krótkie.',
  blankConfirmedPassword: 'Powtórz hasło.',
  differentConfirmedPassword: 'Podane przez Ciebie hasła różnią się.',
  stopped: 'Proces logowania został przerwany.',
};
