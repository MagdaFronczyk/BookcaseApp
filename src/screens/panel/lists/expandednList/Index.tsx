import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

//types
import {RootStackScreenProps} from '../../../../types';

const Index = () => {
  const route = useRoute<RootStackScreenProps<'UserListsModals'>['route']>();
  const navigation =
    useNavigation<RootStackScreenProps<'UserListsModals'>['navigation']>();
  const {listId, listName} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: listName,
    });
  }, [navigation, listName]);

  return (
    <View>
      <Text>Expanded List</Text>
    </View>
  );
};

export default Index;
