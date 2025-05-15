import React from 'react';
import {Pressable} from 'react-native';

import FastImage from 'react-native-fast-image';

//components
import RobotoBold from '../../../../components/fonts/RobotoBold';
//helpers
//styles
import {listItem as styles} from './_styles';
//types
import {IUserList} from '../../../../types';
import {theme} from '../../../../style/styles';

type Props = {
  userList: IUserList;
  handler: (userList: IUserList) => void;
  withExpandIcon?: boolean;
};

import ExpandIcon from '../../../../assets/icons/arrow_right_icon.png';

const CommonListItem: React.FC<Props> = ({
  userList,
  handler,
}): React.JSX.Element => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Wybierz listę: ${userList.listName}`}
      accessibilityHint="Po kliknięciu przenosi na widok szczegółów list."
      style={({pressed}) => [
        styles.container,

        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      onPress={() => handler(userList)}>
      <RobotoBold
        numberOfLines={1}
        style={styles.name}
        size={theme.fontSize.fifteen}
        color={theme.color.black}>
        {userList.listName}
      </RobotoBold>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={styles.expandIcon}
        source={ExpandIcon}
      />
    </Pressable>
  );
};

export default CommonListItem;
