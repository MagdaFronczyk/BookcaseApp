import {
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
//helpers
import {showToast} from '../../utils/toasts';
import {
  LISTS_COLLECTION_REF,
  BOOKS_COLLECTION_REF,
} from '../../services/firbaseConfig';
//types
import {RootStackScreenProps} from '../../../src/types';

export const removeListWithRelatedBooksByListId = (
  listId: string,
  listName: string,
  ownerUid: FirebaseAuthTypes.User['uid'] | null,
  navigation?: RootStackScreenProps<'UserListsModals'>['navigation'],
): void => {
  const booksQuery = query(
    BOOKS_COLLECTION_REF,
    where('ownerUid', '==', ownerUid),
    where('listId', '==', listId),
  );

  getDocs(booksQuery).then(querySnapshot => {
    if (querySnapshot && !querySnapshot?.empty) {
      querySnapshot.forEach(relatedBook => {
        deleteDoc(doc(BOOKS_COLLECTION_REF, relatedBook.id));
      });
    }
  });

  deleteDoc(doc(LISTS_COLLECTION_REF, listId))
    .then(() => {
      showToast(`Usunięto listę ${listName}.`);
    })
    .finally(() => {
      if (navigation) {
        navigation.goBack();
      }
    });
};
