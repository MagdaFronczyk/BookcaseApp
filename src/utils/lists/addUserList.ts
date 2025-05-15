import {addDoc, serverTimestamp} from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
//helpers
import {showToast} from '../toasts';
import {LISTS_COLLECTION_REF} from '../../services/firbaseConfig';
//types
import {IUserList} from '../../types';

export const addUserList = (
  uid: FirebaseAuthTypes.User['uid'],
  listName: string,
): void => {
  const newList: Omit<IUserList, 'listId'> = {
    createdAt: serverTimestamp(),
    listName: listName,
    ownerUid: uid,
  };

  addDoc(LISTS_COLLECTION_REF, newList)
    .catch(error => {
      showToast('Nie udało się dodać listy.');
      console.error(error);
    })
    .finally(() => {
      showToast(`Dodano listę ${listName}`);
    });
};
