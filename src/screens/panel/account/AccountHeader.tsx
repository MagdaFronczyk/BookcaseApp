import React from 'react';
import {View} from 'react-native';

import FastImage from 'react-native-fast-image';

//components
import RobotoRegular from '../../../components/fonts/RobotoRegular';
//helpers
import {useFirebaseUser} from '../../../utils/hooks/useFirebaseUser';
//styles
import {accountHeader as styles} from './_styles';
import {theme} from '../../../style/styles';

import UserIcon from '../../../assets/icons/user_icon.png';

const AccountHeader: React.FC = (): React.JSX.Element => {
  const {user} = useFirebaseUser();
  return (
    <View
      style={{
        ...styles.container,
      }}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={styles.icon}
        source={UserIcon}
      />
      <RobotoRegular size={theme.fontSize.fifteen} color={theme.color.black}>
        Witaj {(user && user.displayName) || 'użytkowniku'} !
      </RobotoRegular>
    </View>
  );
};

export default AccountHeader;
