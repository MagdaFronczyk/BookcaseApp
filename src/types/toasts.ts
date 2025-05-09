import {GestureResponderEvent} from 'react-native';
import {IUserList} from './lists';

export type IToastButtonData = {
  label: string;
  handler:
    | ((
        event: GestureResponderEvent,
        listName?: IUserList['listName'],
        listId?: IUserList['listId'],
      ) => void)
    | undefined;
  accHint: string;
  borderColor: string;
  backgroundColor: string;
  titleColor: string;
};
