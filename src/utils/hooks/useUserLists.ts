import {useEffect, useState} from 'react';

import {onSnapshot, query, where} from '@react-native-firebase/firestore';
//helpers
import {useFirebaseUser} from './useFirebaseUser';
import {LISTS_COLLECTION_REF} from '../../services/firbaseConfig';
//types
import {IUserList} from '../../types';
import {status} from '../../types/enums';

type IUserListsResponse = {
  data: IUserList[];
  status: status;
};

const COMMON_INIT_USER_LIST_RESPONSE: IUserListsResponse = {
  data: [],
  status: status.PENDING,
};

export const useUserLists = () => {
  const {user} = useFirebaseUser();
  const [userListResponse, setUserListResponse] = useState<IUserListsResponse>(
    COMMON_INIT_USER_LIST_RESPONSE,
  );

  useEffect(() => {
    if (user && user.uid) {
      const q = query(LISTS_COLLECTION_REF, where('ownerUid', '==', user.uid));
      const unsubscribe = onSnapshot(q, querySnapshot => {
        const userListsData: IUserList[] = [];
        if (querySnapshot && !querySnapshot.empty) {
          querySnapshot.forEach(list => {
            userListsData.push({
              createdAt: list.data().createdAt,
              listName: list.data().listName,
              ownerUid: list.data().ownerUid,
              listId: list.id,
            });
            setUserListResponse({
              data: userListsData,
              status: status.RESOLVED,
            });
          });
        } else {
          setUserListResponse({
            data: [],
            status: status.RESOLVED,
          });
        }
      });

      return () => unsubscribe();
    }
  }, [user]);

  return {userListResponse};
};
