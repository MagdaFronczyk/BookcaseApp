import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
//components
import CommonPanelButton from '../../_common/CommonPanelButton';
import CommonPanelFormInput from '../../_common/CommonPanelFormInput';
//helpers
import {showToast} from '../../../../utils/toasts';
import {addUserList} from '../../../../utils/lists/addUserLists';
import {useFirebaseUser} from '../../../../utils/hooks';
//styles
import {index as styles} from './_styles';
//types
import {RootStackScreenProps} from '../../../../types/index';
import {theme} from '../../../../style/styles';

const INITIAL_FORM: {listName: string} = {
  listName: '',
};

const Index: React.FC = (): React.JSX.Element => {
  const navigation =
    useNavigation<RootStackScreenProps<'UserListsModals'>['navigation']>();

  const {user} = useFirebaseUser();
  const [listForm, setListForm] = useState<{listName: string}>(INITIAL_FORM);

  useEffect(() => {
    navigation.setOptions({
      title: 'Dodaj listę',
    });
  }, [navigation]);

  const handleOnChangeListName = (value: string): void => {
    setListForm({listName: value});
  };

  const handleAddUserList = (): void => {
    if (listForm.listName.length === 0) {
      showToast('Wpisz nazwę listy.');
      return;
    }
    if (user) {
      addUserList(user.uid, listForm.listName);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <CommonPanelFormInput
        form={{
          placeholder: 'Nazwa listy',
          handler: handleOnChangeListName,
          inputValue: listForm.listName,
          secure: false,
        }}
      />
      <CommonPanelButton
        buttonData={{
          title: 'Dodaj listę',
          handler: handleAddUserList,
          accLabel: 'Dodaj listę.',
          accHint: `Kliknij, aby dodać listę o nazwie: ${listForm.listName}.`,
          borderColor: theme.backgroundColor.black,
          backgroundColor: theme.backgroundColor.black,
          titleColor: theme.color.white,
          icon: null,
        }}
        align={'column'}
        isDisabled={listForm.listName.length === 0}
      />
    </View>
  );
};

export default Index;
