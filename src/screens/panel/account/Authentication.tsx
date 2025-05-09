import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
//components
import RobotoRegular from '../../../components/fonts/RobotoRegular';
import CommonPanelButton from '../_common/CommonPanelButton';
//styles
import {authentication as styles} from './_styles';
import {theme} from '../../../style/styles';
//types
import {RootStackScreenProps, IPanelButtonData} from '../../../types/index';
import {panelModalScreenNames} from '../../../types/enums';

const Authentication: React.FC = (): React.JSX.Element => {
  const navigation =
    useNavigation<RootStackScreenProps<'AuthenticationModals'>['navigation']>();

  const handleGoToSignInModal = useCallback((): void => {
    navigation.navigate('AuthenticationModals', {
      screen: panelModalScreenNames.SIGN_IN,
    });
  }, [navigation]);

  const handleGoToSignUpModal = useCallback((): void => {
    navigation.navigate('AuthenticationModals', {
      screen: panelModalScreenNames.SIGN_UP,
    });
  }, [navigation]);

  const buttonData: IPanelButtonData[] = useMemo(() => {
    return [
      {
        title: 'Posiadam już konto',
        handler: handleGoToSignInModal,
        accLabel: 'Kliknij, aby się zalogować',
        accHint: 'Po kliknięciu zostaniesz przeniesiony na ekran logowania.',
        borderColor: theme.color.black,
        backgroundColor: theme.backgroundColor.black,
        titleColor: theme.color.white,
        icon: null,
      },
      {
        title: 'Utwórz konto',
        handler: handleGoToSignUpModal,
        accLabel: 'Kliknij, aby założyć konto.',
        accHint:
          'Po kliknięciu zostaniesz przeniesiony na ekran tworzenia konta.',
        borderColor: theme.color.black,
        backgroundColor: theme.backgroundColor.black,
        titleColor: theme.color.white,
        icon: null,
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleGoToSignUpModal, handleGoToSignInModal, theme]);

  return (
    <View style={styles.container}>
      <RobotoRegular
        color={theme.color.black}
        size={theme.fontSize.fifteen}
        style={styles.title}>
        Załóż konto aby w pełni korzystać z funkcjonalności aplikacji!
      </RobotoRegular>
      <View style={styles.buttonsWrapper}>
        {buttonData.map(button => {
          return (
            <CommonPanelButton
              key={button.title}
              buttonData={button}
              align="row"
            />
          );
        })}
      </View>
    </View>
  );
};

export default Authentication;
