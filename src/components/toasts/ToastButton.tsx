import React from 'react';
import {Pressable} from 'react-native';

//components
import RobotoBold from '../../components/fonts/RobotoBold';
//styles
import {toastButton as styles} from './_styles';
import {theme} from '../../style/styles';
//types
import {IToastButtonData} from '../../types';

type Props = {
  buttonData: IToastButtonData;
};

const ToastButton: React.FC<Props> = ({buttonData}): React.JSX.Element => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={buttonData.label}
      accessibilityHint={buttonData.accHint}
      onPress={buttonData.handler}
      key={buttonData.label}
      style={({pressed}) => {
        return {
          ...styles.container,
          borderColor: buttonData.borderColor,
          backgroundColor: buttonData.backgroundColor,
          opacity: pressed ? 0.7 : 1,
        };
      }}>
      <RobotoBold color={buttonData.titleColor} size={theme.fontSize.twelve}>
        {buttonData.label}
      </RobotoBold>
    </Pressable>
  );
};

export default ToastButton;
