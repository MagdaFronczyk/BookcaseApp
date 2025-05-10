import {collection, getFirestore} from '@react-native-firebase/firestore';
//types
import {userListsCollections} from '../types/enums';

export const DB = getFirestore();
export const LISTS_COLLECTION_REF = collection(
  DB,
  userListsCollections.USERS_LISTS,
);

export const BOOKS_COLLECTION_REF = collection(
  DB,
  userListsCollections.USERS_BOOKS,
);
