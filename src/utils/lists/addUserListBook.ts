import {addDoc, serverTimestamp} from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

//helpers
import {showToast} from '../../utils/toasts';
import {BOOKS_COLLECTION_REF} from '../../services/firbaseConfig';
//types
import {IUserListBook, RootStackScreenProps} from '../../types';
import {listModalScreenNames} from '../../types/enums';

export const addUserListBook = (
  user: FirebaseAuthTypes.User,
  listName: string | undefined,
  listId: string | undefined,
  author: string,
  title: string,
  navigation: RootStackScreenProps<'UserListsModals'>['navigation'],
): void => {
  const newListBook: Omit<IUserListBook, 'bookId'> = {
    createdAt: serverTimestamp(),
    listName: listName,
    listId: listId,
    ownerUid: user.uid,
    bookAuthor: author,
    bookTitle: title,
  };

  addDoc(BOOKS_COLLECTION_REF, newListBook)
    .catch(() => {
      showToast('Nie udało się dodać ksiązki.');
    })
    .finally(() => {
      showToast(`Dodano ksiązkę ${title}`);
      navigation.navigate('UserListsModals', {
        screen: listModalScreenNames.EXPANDED_LIST,
        listId: listId,
        listName: listName,
      });
    });
};
