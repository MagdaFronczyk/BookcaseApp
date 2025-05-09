import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export type IUserList = {
  createdAt: FirebaseFirestoreTypes.FieldValue;
  listName: string;
  ownerUid: string | number;
  listId: string;
};
