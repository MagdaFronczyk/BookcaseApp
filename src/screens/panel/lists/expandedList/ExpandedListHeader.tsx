import React, {useCallback, useMemo} from 'react';
import {Pressable, View} from 'react-native';
import {useSelector} from 'react-redux';

import Toast from 'react-native-toast-message';
import FastImage from 'react-native-fast-image';
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
import {listModalScreenNames} from '../../../../types/enums';

import DeleteIcon from '../../../../assets/icons/remove_icon.png';

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

  const handleNavigateToAddUserBook = useCallback((): void => {
    if (!isConnected) {
      showToastWithTitle(
        'Jesteś OFFLINE',
        'Akcja możliwa po przywróceniu połączenia internetowego.',
      );
      return;
    }
    navigation.navigate('UserListsModals', {
      screen: listModalScreenNames.ADD_BOOK,
      listId: listId,
      listName: listName,
    });
  }, [isConnected, listId, listName, navigation]);

  return (
    <View>
      <View
        style={[
          styles.wrapper,
          {backgroundColor: theme.backgroundColor.black},
        ]}>
        <RobotoBold color={theme.color.white} size={theme.fontSize.twentyTwo}>
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
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            style={styles.image}
            source={DeleteIcon}
          />
        </Pressable>
      </View>
      <Pressable
        style={({pressed}) => {
          return {
            ...styles.addButton,
            opacity: pressed ? 0.7 : 1,
            backgroundColor: theme.backgroundColor.white,
          };
        }}
        accessibilityRole="button"
        accessibilityLabel="Usuń listę."
        accessibilityHint={`Po kliknięciu lista: ${listName} zostanie usunięta.`}
        onPress={handleNavigateToAddUserBook}>
        <RobotoMedium color={theme.color.black} size={theme.fontSize.thirteen}>
          dodaj do listy
        </RobotoMedium>
      </Pressable>
    </View>
  );
};

export default ExpandedListHeader;
