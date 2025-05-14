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
  createdAt: FirebaseFirestoreTypes.FieldValue;
  listId: string | undefined;
  listName: string | undefined;
  ownerUid: string;
  bookTitle: string;
  bookAuthor: string;
  bookId: string;
};

export type IListBookForm = {
  bookTitle: string;
  bookAuthor: string;
};

export type IListBookFormData = {
  placeholder: string;
  handler: (email: string) => void;
  inputValue: string;
  secure: boolean;
};
