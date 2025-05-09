import React from 'react';
import {Pressable} from 'react-native';

//components
import RobotoBold from '../../components/fonts/RobotoBold';
//styles
import {toastButton as styles} from './_styles';
import {theme} from '../../style/styles';
//types
import {IToastButtonData, IUserList} from '../../types';

type Props = {
  lightButtonData: IToastButtonData;
  listName?: IUserList['listName'];
  listId?: IUserList['listId'];
};

const ToastLightButton: React.FC<Props> = ({
  lightButtonData,
  listName,
  listId,
}): React.JSX.Element => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={lightButtonData.label}
      accessibilityHint={lightButtonData.accHint}
      onPress={e =>
        lightButtonData.handler && lightButtonData.handler(e, listName, listId)
      }
      key={lightButtonData.label}
      style={({pressed}) => {
        return {
          ...styles.container,
          borderColor: lightButtonData.borderColor,
          backgroundColor: lightButtonData.backgroundColor,
          opacity: pressed ? 0.7 : 1,
        };
      }}>
      <RobotoBold
        color={lightButtonData.titleColor}
        size={theme.fontSize.twelve}>
        {lightButtonData.label}
      </RobotoBold>
    </Pressable>
  );
};

export default ToastLightButton;
