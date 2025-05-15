import {deleteDoc, doc} from '@react-native-firebase/firestore';

//helpers
import {showToast} from '../../utils/toasts';
//services
import {BOOKS_COLLECTION_REF} from '../../services/firbaseConfig';
//types
import {IUserListBook} from '../../types';

export const removeUserLisBook = (
  bookId: IUserListBook['bookId'],
  bookTitle: IUserListBook['bookTitle'],
): void => {
  deleteDoc(doc(BOOKS_COLLECTION_REF, bookId))
    .then(() => {
      showToast(`Usunięto ksiazke ${bookTitle}`);
    })
    .finally(() => {});
};
