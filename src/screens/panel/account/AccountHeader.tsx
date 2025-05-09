import React from 'react';
import {View} from 'react-native';

import {scale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';
//components
import RobotoRegular from '../../../components/fonts/RobotoRegular';
//helpers
import {useFirebaseUser} from '../../../utils/hooks/useFirebaseUser';
//styles
import {accountHeader as styles} from './_styles';
import {theme} from '../../../style/styles';

const USER_ICON_PATH =
  'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z';
const USER_ICON_SIZE = scale(90);

const AccountHeader: React.FC = (): React.JSX.Element => {
  const {user} = useFirebaseUser();
  return (
    <View
      style={{
        ...styles.container,
      }}>
      <Svg
        style={{
          ...styles.iconWrapper,
          backgroundColor: theme.backgroundColor.black,
        }}
        accessibilityRole="none"
        height={USER_ICON_SIZE}
        width={USER_ICON_SIZE}
        viewBox="0 0 24 24">
        <Path fill={theme.backgroundColor.white} d={USER_ICON_PATH} />
      </Svg>
      <RobotoRegular size={theme.fontSize.fifteen} color={theme.color.black}>
        Witaj {(user && user.displayName) || 'użytkowniku'} !
      </RobotoRegular>
    </View>
  );
};

export default AccountHeader;
