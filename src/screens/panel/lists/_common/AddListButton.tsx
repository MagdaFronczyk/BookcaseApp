import React from 'react';
import {Pressable, View} from 'react-native';

import {scale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
//components
import RobotoBold from '../../../../components/fonts/RobotoBold.tsx';
import AddIcon from '../../../../components/icons/AddIcon.tsx';
//helpers
import {useFirebaseUser} from '../../../../utils/hooks/index.ts';
//styles
import {addListButton as styles} from './_styles.ts';
import {theme} from '../../../../style/styles.ts';
//utils
import {showToastWithTitle} from '../../../../utils/toasts/index.ts';
//redux
import {RootState} from '../../../../services/Redux/store.ts';

const ADD_ICON_SIZE = scale(24);

type Props = {
  handler: () => void;
};

const AddListButton: React.FC<Props> = ({handler}): React.JSX.Element => {
  const {user} = useFirebaseUser();
  const isConnected = useSelector(
    (state: RootState) => state.internetConnection.isConnected,
  );

  const handleAddList = (): void => {
    if (!isConnected) {
      showToastWithTitle(
        'Jesteś OFFLINE',
        'Akcja możliwa po przywróceniu połączenia internetowego.',
      );
      return;
    }
    handler();
  };
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Dodaj listę"
      accessibilityHint="Po kliknięciu przenosi na ekran dodawania nowej listy."
      style={({pressed}) => [
        {
          ...styles.container,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      onPress={handleAddList}>
      <View
        style={{
          ...styles.icon,
          backgroundColor: user
            ? theme.backgroundColor.black
            : theme.backgroundColor.lightGray,
        }}>
        <AddIcon size={ADD_ICON_SIZE} color={theme.color.white} />
      </View>
      <RobotoBold size={theme.fontSize.eleven} color={theme.color.black}>
        DODAJ LISTĘ
      </RobotoBold>
    </Pressable>
  );
};

export default AddListButton;
