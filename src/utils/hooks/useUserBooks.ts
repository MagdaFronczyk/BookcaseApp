import {useEffect, useState} from 'react';

import {
  onSnapshot,
  orderBy,
  query,
  where,
} from '@react-native-firebase/firestore';

//types
import {status} from '../../types/enums';
import {IUserListBook} from '../../types';
//utils
import {useFirebaseUser} from './useFirebaseUser';
import {BOOKS_COLLECTION_REF} from '../../services/firbaseConfig';

type IUserListBooksResponse = {
  data: IUserListBook[];
  status: status;
};

const COMMON_INIT_USER_LIST_BOOKS_RESPONSE: IUserListBooksResponse = {
  data: [],
  status: status.PENDING,
};

const useUserBooks = (listId: string | undefined) => {
  const {user} = useFirebaseUser();

  const [userListBooksResponse, setUserListBooksResponse] =
    useState<IUserListBooksResponse>(COMMON_INIT_USER_LIST_BOOKS_RESPONSE);

  useEffect(() => {
    if (user && user.uid) {
      const q = query(
        BOOKS_COLLECTION_REF,
        where('ownerUid', '==', user.uid),
        where('listId', '==', listId),
      );
      const unsubscribe = onSnapshot(q, querySnapshot => {
        const userListBooksData: IUserListBook[] = [];
        if (querySnapshot && !querySnapshot?.empty) {
          querySnapshot.forEach(book => {
            userListBooksData.push({
              ...(book.data() as IUserListBook),
              bookId: book.id,
            });
            setUserListBooksResponse({
              data: userListBooksData,
              status: status.RESOLVED,
            });
          });
        } else {
          setUserListBooksResponse({
            data: [],
            status: status.RESOLVED,
          });
        }
      });

      return () => unsubscribe();
    }
  }, [listId, user]);

  return {userListBooksResponse};
};

export default useUserBooks;
