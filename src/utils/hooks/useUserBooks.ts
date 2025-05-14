import {useEffect, useMemo, useState} from 'react';

import {onSnapshot, query, where} from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

//types
import {status} from '../../types/enums';
import {IListBookForm, IUserListBook} from '../../types';
//utils
import {useFirebaseUser} from './useFirebaseUser';
import {BOOKS_COLLECTION_REF} from '../../services/firbaseConfig';
import {userListBookErrors} from '../constants';
import {addUserListBook} from '../lists/addUserListBook';

type IUserListBooksResponse = {
  data: IUserListBook[];
  status: status;
};

const COMMON_INIT_USER_LIST_BOOKS_RESPONSE: IUserListBooksResponse = {
  data: [],
  status: status.PENDING,
};

const MIN_AUTHOR_LEN = 1;
const MIN_TITLE_LEN = 1;

const useUserBooks = (
  listId: string | undefined,
  listName: string | undefined,
  form: IListBookForm,
) => {
  const {user} = useFirebaseUser();
  const [userListBooksResponse, setUserListBooksResponse] =
    useState<IUserListBooksResponse>(COMMON_INIT_USER_LIST_BOOKS_RESPONSE);
  const [errors, setErrors] = useState<string[]>([]);
  const bookId = uuid.v4();

  const bookChecklist = useMemo(() => {
    const isBookAuthorLenValid = form.bookAuthor?.length > MIN_AUTHOR_LEN;
    const isBookTitleLenValid = form.bookTitle?.length > MIN_TITLE_LEN;
    return {
      isBookAuthorLenValid,
      isBookTitleLenValid,
    };
  }, [form]);

  const handleAddUserListBook = async () => {
    setErrors([]);

    if (
      !bookChecklist.isBookAuthorLenValid ||
      !bookChecklist.isBookTitleLenValid
    ) {
      if (!bookChecklist.isBookAuthorLenValid) {
        setErrors(prev => {
          return [...prev, userListBookErrors.tooShortBookAuthor];
        });
      }

      if (!bookChecklist.isBookTitleLenValid) {
        setErrors(prev => {
          return [...prev, userListBookErrors.tooShortBookTitle];
        });
      }
      return;
    }

    if (user && user.uid) {
      try {
        await addUserListBook(
          user,
          listName,
          listId,
          form.bookAuthor,
          form.bookTitle,
          bookId,
        );
        setErrors([]);
      } catch (error) {
        setErrors(prev => {
          return [...prev, userListBookErrors.common];
        });
      }
    }
  };

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

  return {userListBooksResponse, handleAddUserListBook, errors};
};

export default useUserBooks;
