import React from 'react';
import {FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';
//components
import CommonListItem from './_common/CommonListItem';
import CommonPending from '../../../components/CommonLoading';
import CommonNoData from './_common/CommonNoData';
//helpers
import {useFirebaseUser, useUserLists} from '../../../utils/hooks';
//types
import {IUserList, RootStackScreenProps} from '../../../types';
import {listModalScreenNames, status} from '../../../types/enums';

const UserLists: React.FC = (): React.JSX.Element => {
  const {userListResponse} = useUserLists();
  const {user} = useFirebaseUser();
  const navigation =
    useNavigation<RootStackScreenProps<'UserListsModals'>['navigation']>();

  const renderItem = ({item}: {item: IUserList}) => (
    <CommonListItem
      key={item.listId}
      userList={item}
      handler={handleExpandList}
    />
  );

  const keyExtractor = (item: IUserList, index: number) =>
    `${item.listId}=${index}`;

  const handleExpandList = (userList: IUserList) => {
    navigation.navigate('UserListsModals', {
      screen: listModalScreenNames.EXPANDED_LIST,
      listId: userList.listId,
      listName: userList.listName,
    });
  };

  if (!user) {
    return (
      <CommonNoData text='Aby korzystać z list personalnych musisz zalogować się na ekranie "Konto".' />
    );
  }

  if (userListResponse.status === status.PENDING) {
    return <CommonPending />;
  }

  if (!userListResponse.data.length) {
    return <CommonNoData text="Brak list personalnych" />;
  }

  if (userListResponse.status === status.REJECTED) {
    return (
      <CommonNoData text="Nie udało się pobrać list personalnych. Sprawdź połączenie internetu." />
    );
  }

  return (
    <FlatList
      data={userListResponse.data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default UserLists;
