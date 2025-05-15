import React from 'react';

import {FlatList} from 'react-native-gesture-handler';

//components
import CommonLoading from '../../../../components/CommonLoading';
import useUserBooks from '../../../../utils/hooks/useUserBooks';
import CommonNoData from '../_common/CommonNoData';
import CommonBookItem from '../_common/CommonBookItem';
//types
import {status} from '../../../../types/enums';
import {IUserListBook} from '../../../../types';

type Props = {
  listId: string | undefined;
};

const UserBooks: React.FC<Props> = ({listId}): JSX.Element => {
  const {userListBooksResponse} = useUserBooks(listId);

  const renderItem = ({item}: {item: IUserListBook}) => (
    <CommonBookItem userListBook={item} />
  );

  const keyExtractor = (item: IUserListBook, index: number) =>
    `${item.bookId}=${index}`;

  if (userListBooksResponse.status === status.PENDING) {
    return <CommonLoading />;
  }

  if (!userListBooksResponse.data.length) {
    return <CommonNoData text="Brak ksiazek na liscie" />;
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
