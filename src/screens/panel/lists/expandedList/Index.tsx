import React, {useEffect} from 'react';
import {View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
//components
import ExpandedListHeader from './ExpandedListHeader';
//styles
import {index as styles} from './_styles';
//types
import {RootStackScreenProps} from '../../../../../src/types';
import UserBooks from './UserBooks';

const Index: React.FC = (): React.JSX.Element => {
  const route = useRoute<RootStackScreenProps<'UserListsModals'>['route']>();
  const navigation =
    useNavigation<RootStackScreenProps<'UserListsModals'>['navigation']>();
  const {listId, listName} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: '',
    });
  }, [navigation, listName]);

  return (
    <View style={styles.container}>
      <ExpandedListHeader listName={listName || ''} listId={listId || ''} />
      <UserBooks listId={listId} />
    </View>
  );
};

export default Index;
