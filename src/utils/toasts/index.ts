import {verticalScale} from 'react-native-size-matters';
import Toast from 'react-native-toast-message';

//helpers
import {BOTTOM_TAB_HEIGHT} from '../../utils/constants';
//types
import {IToastButtonData, IUserList} from '../../types';

const ADDITIONAL_SCREEN_OFFSET = verticalScale(25);
const TOAST_VISIBILITY_TIME = 6000;
const TOAST_OFFSET = BOTTOM_TAB_HEIGHT + ADDITIONAL_SCREEN_OFFSET;

export const showToast = (text: string): void => {
  Toast.show({
    type: 'commonToast',
    position: 'bottom',
    visibilityTime: TOAST_VISIBILITY_TIME,
    bottomOffset: TOAST_OFFSET,
    text1: text,
  });
};

export const showToastWithTitle = (title: string, text: string): void => {
  Toast.show({
    type: 'commonToastWithTitle',
    position: 'bottom',
    visibilityTime: TOAST_VISIBILITY_TIME,
    bottomOffset: TOAST_OFFSET,
    text1: text,
    text2: title,
  });
};

export const showToastWithButton = (
  title: string,
  text: string,
  buttonsData: IToastButtonData[],
): void => {
  Toast.show({
    type: 'commonToastWithButton',
    position: 'bottom',
    autoHide: false,
    bottomOffset: TOAST_OFFSET,
    text1: text,
    text2: title,
    props: {buttonsData},
  });
};

export const showToastWithLightButton = (
  title: string,
  lightButtonData: IToastButtonData,
  listName: IUserList['listName'],
  listId: IUserList['listId'],
): void => {
  Toast.show({
    type: 'commonToastWithLightButton',
    position: 'bottom',
    autoHide: true,
    visibilityTime: TOAST_VISIBILITY_TIME,
    bottomOffset: TOAST_OFFSET,
    text2: title,
    props: {lightButtonData, listName, listId},
  });
};
