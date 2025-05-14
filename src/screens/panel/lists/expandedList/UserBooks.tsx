import React from 'react';
import useUserBooks from '../../../../utils/hooks/useUserBooks';
import {FlatList} from 'react-native-gesture-handler';
import CommonNoData from '../_common/CommonNoData';
import {status} from '../../../../types/enums';
import CommonLoading from '../../../../components/CommonLoading';
import {IUserListBook} from '../../../../types';
import RobotoBlack from '../../../../components/fonts/RobotoBlack';
import {theme} from '../../../../style/styles';

type Props = {
  listId: string | undefined;
};

const UserBooks: React.FC<Props> = ({listId}): JSX.Element => {
  const {userListBooksResponse} = useUserBooks(listId);

  const renderItem = ({item}: {item: IUserListBook}) => (
    <RobotoBlack size={theme.fontSize.fifteen} color={theme.color.black}>
      {item.bookAuthor}
    </RobotoBlack>
  );

  const keyExtractor = (item: IUserListBook, index: number) =>
    `${item.bookId}=${index}`;

  if (userListBooksResponse.status === status.PENDING) {
    return <CommonLoading />;
  }

  if (!userListBooksResponse.data.length) {
    return <CommonNoData text="Brak list personalnych" />;
  }

  if (userListBooksResponse.status === status.REJECTED) {
    return (
      <CommonNoData text="Nie udało się pobrać ksiązek. Sprawdź połączenie internetu." />
    );
  }

  return (
    <FlatList
      data={userListBooksResponse.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default UserBooks;
