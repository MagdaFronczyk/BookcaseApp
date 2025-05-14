import {View} from 'react-native';
import React, {useMemo, useState} from 'react';
//types
import {
  IListBookForm,
  IListBookFormData,
  RootStackScreenProps,
} from '../../../../types';
//components
import CommonPanelFormInput from '../../_common/CommonPanelFormInput';
import CommonPanelButton from '../../_common/CommonPanelButton';
//styles
import {index as styles} from './_styles';
import {theme} from '../../../../style/styles';
import {useRoute} from '@react-navigation/native';
import useUserBooks from '../../../../utils/hooks/useUserBooks';
import RobotoLight from '../../../../components/fonts/RobotoLight';

const INITIAL_FORM: IListBookForm = {
  bookTitle: '',
  bookAuthor: '',
};

const Index: React.FC = (): JSX.Element => {
  const [bookForm, setBookForm] = useState<IListBookForm>(INITIAL_FORM);
  const route = useRoute<RootStackScreenProps<'UserListsModals'>['route']>();

  const {listId, listName} = route.params;

  const {handleAddUserListBook, errors} = useUserBooks(
    listId,
    listName,
    bookForm,
  );

  const handleTitle = (title: string): void => {
    setBookForm((prev: {bookAuthor: string}) => {
      return {
        bookTitle: title,
        bookAuthor: prev.bookAuthor,
      };
    });
  };

  const handleAuthor = (author: string): void => {
    setBookForm((prev: {bookTitle: string}) => {
      return {
        bookTitle: prev.bookTitle,
        bookAuthor: author,
      };
    });
  };

  const addUserListBook = (): void => {};

  const formData: IListBookFormData[] = useMemo(() => {
    return [
      {
        placeholder: 'Tytuł',
        handler: handleTitle,
        inputValue: bookForm.bookTitle,
        secure: false,
      },
      {
        placeholder: 'Autor',
        handler: handleAuthor,
        inputValue: bookForm.bookAuthor,
        secure: false,
      },
    ];
  }, [bookForm.bookAuthor, bookForm.bookTitle]);

  return (
    <View style={styles.container}>
      {formData.map(form => {
        return <CommonPanelFormInput key={form.placeholder} form={form} />;
      })}
      <CommonPanelButton
        buttonData={{
          title: 'Dodaj ksiązkę',
          handler: handleAddUserListBook,
          accLabel: 'Dodaj ksiazke.',
          accHint: `Kliknij, aby dodać ksiazke o nazwie: ${bookForm.bookAuthor},${bookForm.bookTitle}.`,
          borderColor: theme.backgroundColor.black,
          backgroundColor: theme.backgroundColor.black,
          titleColor: theme.color.white,
          icon: null,
        }}
        align={'column'}
        isDisabled={
          bookForm.bookAuthor.length === 0 || bookForm.bookTitle.length === 0
        }
      />
      {errors.length
        ? errors.map(error => {
            return (
              <RobotoLight
                color={theme.color.error}
                size={theme.fontSize.eleven}
                key={error}>
                {error}
              </RobotoLight>
            );
          })
        : null}
    </View>
  );
};

export default Index;
