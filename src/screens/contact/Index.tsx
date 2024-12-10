import React from 'react';
import {View} from 'react-native';

//components
import RobotoBold from '../../components/fonts/RobotoBold';
import RobotoRegular from '../../components/fonts/RobotoRegular';
//styles
import {theme} from '../../style/styles';
import {contact as styles} from './_styles';

const Contact: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <RobotoBold color={theme.color.black} size={theme.fontSize.eighteen}>
        Email:
      </RobotoBold>
      <RobotoRegular color={theme.color.black} size={theme.fontSize.eighteen}>
        magdalenaoliwiaf@gmail.com
      </RobotoRegular>
    </View>
  );
};

export default Contact;
