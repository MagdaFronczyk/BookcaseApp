import React from 'react';
import CommonToast from '../components/toasts/CommonToast';
import {ToastConfigParams} from 'react-native-toast-message';
//types
import {IToastButtonData, IUserList} from '../../src/types';

type Props = ToastConfigParams<{
  buttonsData: IToastButtonData[];
  lightButtonData: IToastButtonData;
  listName: IUserList['listName'];
  listId: IUserList['listId'];
}>;

export const toastConfig = {
  // workaround for toast message success appearing when app goes to background
  // or when apps switch for example google sign in
  // https://github.com/calintamas/react-native-toast-message/issues/300
  success: () => <></>,
  commonToast: ({text1, isVisible}: Props): React.JSX.Element | null =>
    (isVisible && <CommonToast text1={text1} />) || null,
  commonToastWithTitle: ({
    text1,
    text2,
    isVisible,
  }: Props): React.JSX.Element | null =>
    (isVisible && <CommonToast text1={text1} text2={text2} />) || null,
  commonToastWithButton: ({
    text1,
    text2,
    isVisible,
    props,
  }: Props): React.JSX.Element | null =>
    (isVisible && (
      <CommonToast
        text1={text1}
        text2={text2}
        buttonsData={props.buttonsData}
      />
    )) ||
    null,
  commonToastWithLightButton: ({
    text1,
    text2,
    isVisible,
    props,
  }: Props): React.JSX.Element | null =>
    (isVisible && (
      <CommonToast
        text1={text1}
        text2={text2}
        lightButtonData={props.lightButtonData}
        listName={props.listName}
        listId={props.listId}
      />
    )) ||
    null,
};
