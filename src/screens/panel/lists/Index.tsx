import React from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
// components
import AddListButton from './_common/AddListButton';
import UserLists from './UserLists';
//helpers
import {useFirebaseUser} from '../../../utils/hooks';
import {showToast} from '../../../utils/toasts';
//styles
import {index as styles} from './_styles';
//types
import {RootStackScreenProps} from '../../../types';
import {listModalScreenNames} from '../../../types/enums';

const Index: React.FC = (): React.JSX.Element => {
  const {user} = useFirebaseUser();

  const navigation =
    useNavigation<RootStackScreenProps<'UserListsModals'>['navigation']>();

  const handleGoToAddListModal = () => {
    if (!user) {
      showToast('Zaloguj się na ekranie "Konto" aby stworzyć listę.');
      return;
    }
    navigation.navigate('UserListsModals', {
      screen: listModalScreenNames.ADD_LIST,
    });
  };

  return (
    <View style={styles.container}>
      <UserLists />
      <AddListButton handler={handleGoToAddListModal} />
    </View>
  );
};

export default Index;
