import {useMemo, useState} from 'react';

//types
import {IListBookForm, RootStackScreenProps} from '../../types';
//utils
import {useFirebaseUser} from './useFirebaseUser';
import {userListBookErrors} from '../constants';
import {addUserListBook} from '../lists/addUserListBook';
import {useNavigation} from '@react-navigation/native';

const MIN_AUTHOR_LEN = 1;
const MIN_TITLE_LEN = 1;

const useUserBooks = (
  listId: string | undefined,
  listName: string | undefined,
  form: IListBookForm,
) => {
  const {user} = useFirebaseUser();

  const [errors, setErrors] = useState<string[]>([]);
  const navigation =
    useNavigation<RootStackScreenProps<'UserListsModals'>['navigation']>();

  const bookChecklist = useMemo(() => {
    const isBookAuthorLenValid = form.bookAuthor?.length > MIN_AUTHOR_LEN;
    const isBookTitleLenValid = form.bookTitle?.length > MIN_TITLE_LEN;
    return {
      isBookAuthorLenValid,
      isBookTitleLenValid,
    };
  }, [form]);

  const handleAddUserListBook = () => {
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
      addUserListBook(
        user,
        listName,
        listId,
        form.bookAuthor,
        form.bookTitle,
        navigation,
      );
      setErrors([]);
    }
  };

  return {handleAddUserListBook, errors};
};

export default useUserBooks;
