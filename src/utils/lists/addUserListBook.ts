import {
  addDoc,
  query,
  serverTimestamp,
  where,
} from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
//helpers
import {showToast} from '../../utils/toasts';
import {
  BOOKS_COLLECTION_REF,
  LISTS_COLLECTION_REF,
} from '../../services/firbaseConfig';
//types
import {IUserListBook} from '../../types';

export const addUserListBook = async (
  user: FirebaseAuthTypes.User,
  listName: string | undefined,
  listId: string | undefined,
  author: string,
  title: string,
  id: string,
) => {
  const newListBook: IUserListBook = {
    createdAt: serverTimestamp(),
    listName: listName,
    listId: listId,
    ownerUid: user.uid,
    bookAuthor: author,
    bookTitle: title,
    bookId: id,
  };

  await addDoc(BOOKS_COLLECTION_REF, newListBook)
    .catch(error => {
      showToast('Nie udało się dodać ksiązki.');
      console.error(error);
    })
    .finally(() => {
      showToast(`Dodano ksiązkę ${title}`);
    });
};
