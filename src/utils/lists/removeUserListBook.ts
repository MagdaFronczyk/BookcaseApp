import {deleteDoc, doc} from '@react-native-firebase/firestore';
//helpers
import {showToast} from '../../utils/toasts';
import {BOOKS_COLLECTION_REF} from '../../services/firbaseConfig';

export const removeUserLisBook = async (bookId: string): Promise<void> => {
  await deleteDoc(doc(BOOKS_COLLECTION_REF, bookId)).then(() => {
    showToast('Usunięto ksiazke');
  });
};
