import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {status} from './enums';

export type IUserList = {
  createdAt: FirebaseFirestoreTypes.FieldValue;
  listName: string;
  ownerUid: string | number;
  listId: string;
};

export type IUserListBooksResponse = {
  data: IUserListBook[];
  status: status;
};

export type IUserListBook = {
  firestoreId: string;
  createdAt: FirebaseFirestoreTypes.FieldValue;
  listId: string;
  listName: string;
  ownerUid: string;
  itemData: IUserListBookItemData;
};

export type IUserListBookItemData = {
  book: string;
};
