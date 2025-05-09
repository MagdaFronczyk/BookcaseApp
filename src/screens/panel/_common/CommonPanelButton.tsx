import React, {useMemo} from 'react';
import {Pressable} from 'react-native';

//components
import RobotoBold from '../../../components/fonts/RobotoBold';
//styles
import {commonPanelButton as styles} from './_styles';
//types
import {IPanelButtonData} from '../../../types/panel';
import {theme} from '../../../style/styles';

type Props = {
  buttonData: IPanelButtonData;
  align: 'row' | 'column' | 'single';
  isDisabled?: boolean;
};

const CommonPanelButton: React.FC<Props> = ({
  buttonData,
  align,
}): React.JSX.Element => {
  const buttonWidth = useMemo(() => {
    switch (align) {
      case 'row':
        return '43%';
      case 'column':
        return '65%';
      case 'single':
        return '100%';

      default:
        break;
    }
  }, [align]);
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={buttonData.accLabel}
      accessibilityHint={buttonData.accHint}
      onPress={buttonData.handler}
      key={buttonData.title}
      style={({pressed}) => {
        return {
          ...styles.container,
          opacity: pressed ? 0.7 : 1,
          width: buttonWidth,
          backgroundColor: buttonData.backgroundColor,
          borderColor: buttonData.borderColor,
        };
      }}>
      <RobotoBold color={buttonData.titleColor} size={theme.fontSize.eleven}>
        {buttonData.title}
      </RobotoBold>
    </Pressable>
  );
};

export default CommonPanelButton;
