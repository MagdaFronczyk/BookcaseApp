import React, {useCallback, useMemo} from 'react';
import {Pressable, View} from 'react-native';
import {useSelector} from 'react-redux';

import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
//components
import RobotoBold from '../../../../components/fonts/RobotoBold';
import RobotoMedium from '../../../../components/fonts/RobotoMedium';
//helpers
import {removeListWithRelatedBooksByListId} from '../../../../utils/lists/removeListWithRelatedBooksByListId';
import {useFirebaseUser} from '../../../../utils/hooks';
import {
  showToastWithButton,
  showToastWithTitle,
} from '../../../../utils/toasts';
//styles
import {expandedListHeader as styles} from './_styles';
//types
import {
  IToastButtonData,
  IUserList,
  RootStackScreenProps,
} from '../../../../types';
import {theme} from '../../../../style/styles';
//redux
import {RootState} from '../../../../services/Redux/store';

type Props = {
  listName: IUserList['listName'];
  listId: IUserList['listId'];
};

const ExpandedListHeader: React.FC<Props> = ({
  listName,
  listId,
}): React.JSX.Element => {
  const {user} = useFirebaseUser();
  const navigation =
    useNavigation<RootStackScreenProps<'UserListsModals'>['navigation']>();
  const isConnected = useSelector(
    (state: RootState) => state.internetConnection.isConnected,
  );

  const toastButtonsData: IToastButtonData[] = useMemo(() => {
    return [
      {
        label: 'Usuń listę',
        handler: () =>
          removeListWithRelatedBooksByListId(
            listId,
            listName,
            user?.uid || null,
            navigation,
          ),
        accHint: 'Po kliknięciu wybrana lista zostanie usunięta.',
        borderColor: theme.color.black,
        backgroundColor: theme.color.black,
        titleColor: theme.color.white,
      },
      {
        label: 'Anuluj',
        handler: () => Toast.hide(),
        accHint: 'Anuluj proces usuwania listy.',
        borderColor: theme.color.white,
        backgroundColor: theme.color.white,
        titleColor: theme.color.black,
      },
    ];
  }, [listId, listName, navigation, user]);

  const handleRemoveUserList = useCallback((): void => {
    if (!isConnected) {
      showToastWithTitle(
        'Jesteś OFFLINE',
        'Akcja możliwa po przywróceniu połączenia internetowego.',
      );
      return;
    }
    showToastWithButton(
      `Usuwasz listę ${listName}`,
      'Lista wraz z utworami zostanie permanentnie usunięta.',
      toastButtonsData,
    );
  }, [isConnected, listName, toastButtonsData]);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.backgroundColor.black},
      ]}>
      <View style={styles.wrapper}>
        <RobotoBold color={theme.color.white} size={theme.fontSize.eighteen}>
          {listName}
        </RobotoBold>
        <Pressable
          style={({pressed}) => {
            return {
              ...styles.removeButton,
              opacity: pressed ? 0.7 : 1,
              backgroundColor: theme.backgroundColor.white,
            };
          }}
          accessibilityRole="button"
          accessibilityLabel="Usuń listę."
          accessibilityHint={`Po kliknięciu lista: ${listName} zostanie usunięta.`}
          onPress={handleRemoveUserList}>
          <RobotoMedium
            color={theme.color.black}
            size={theme.fontSize.thirteen}>
            usuń listę
          </RobotoMedium>
        </Pressable>
      </View>
    </View>
  );
};

export default ExpandedListHeader;
