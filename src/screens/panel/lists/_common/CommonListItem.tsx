import React from 'react';
import {Pressable} from 'react-native';

import {scale} from 'react-native-size-matters';
//components
import RobotoBold from '../../../../components/fonts/RobotoBold';
import ExpandIcon from '../../../../components/icons/ExpandIcon';
//helpers
//styles
import {listItem as styles} from './_styles';
//types
import {IUserList} from '../../../../types';
import {theme} from '../../../../style/styles';

const EXPAND_ICON_SIZE = scale(30);

type Props = {
  userList: IUserList;
  handler: (userList: IUserList) => void;
  withExpandIcon?: boolean;
};

const CommonListItem: React.FC<Props> = ({
  userList,
  handler,
  withExpandIcon = true,
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
          backgroundColor: theme.backgroundColor.black,
        },
      ]}
      onPress={() => handler(userList)}>
      <RobotoBold
        numberOfLines={1}
        style={styles.name}
        size={theme.fontSize.fifteen}
        color={theme.color.white}>
        {userList.listName}
      </RobotoBold>
      {withExpandIcon && (
        <ExpandIcon
          style={styles.expandIcon}
          expanded={true}
          height={EXPAND_ICON_SIZE}
          width={EXPAND_ICON_SIZE}
        />
      )}
    </Pressable>
  );
};

export default CommonListItem;
