import React from 'react';
import {Pressable, View} from 'react-native';

import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

//components
import RobotoBold from '../../../../components/fonts/RobotoBold.tsx';
//helpers
import {useFirebaseUser} from '../../../../utils/hooks/index.ts';
//styles
import {addListButton as styles} from './_styles.ts';
import {theme} from '../../../../style/styles.ts';
//utils
import {showToastWithTitle} from '../../../../utils/toasts/index.ts';
//redux
import {RootState} from '../../../../services/Redux/store.ts';

import AddIcon from '../../../../assets/icons/add_icon.png';

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
    if (!user) {
      showToastWithTitle('Nie jestes zalogowany', 'Nie mozesz dodac listy.');
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
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={styles.icon}
        source={AddIcon}
      />
      <RobotoBold size={theme.fontSize.eleven} color={theme.color.black}>
        DODAJ LISTĘ
      </RobotoBold>
    </Pressable>
  );
};

export default AddListButton;
