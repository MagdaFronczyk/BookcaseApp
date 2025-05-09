import React from 'react';
import {View} from 'react-native';

//components
import RobotoBold from '../../components/fonts/RobotoBold';
import RobotoRegular from '../../components/fonts/RobotoRegular';
import ToastButton from './ToastButton';
import ToastLightButton from './ToastLightButton';
//styles
import {commonToast as styles} from './_styles';
//types
import {IToastButtonData, IUserList} from '../../types/index';
import {theme} from '../../style/styles';

type Props = {
  text2?: string;
  text1?: string;
  buttonsData?: IToastButtonData[];
  lightButtonData?: IToastButtonData;
  listName?: IUserList['listName'];
  listId?: IUserList['listId'];
};

const CommonToast: React.FC<Props> = ({
  text2,
  text1,
  buttonsData,
  lightButtonData,
  listName,
  listId,
}): React.JSX.Element => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundColor.darkGray,
      }}>
      {text2 && (
        <RobotoBold
          style={styles.text}
          color={theme.color.white}
          size={theme.fontSize.twelve}>
          {text2}
        </RobotoBold>
      )}
      {text1 && (
        <RobotoRegular
          style={styles.text}
          color={theme.color.white}
          size={theme.fontSize.twelve}>
          {text1}
        </RobotoRegular>
      )}
      {buttonsData && (
        <View style={styles.buttons}>
          {buttonsData.map(buttonData => {
            return (
              <ToastButton buttonData={buttonData} key={buttonData.label} />
            );
          })}
        </View>
      )}
      {lightButtonData && (
        <ToastLightButton
          lightButtonData={lightButtonData}
          key={lightButtonData.label}
          listName={listName}
          listId={listId}
        />
      )}
    </View>
  );
};

export default CommonToast;
