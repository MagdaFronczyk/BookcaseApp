import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
//components
import RobotoRegular from '../../../../components/fonts/RobotoRegular';
import RobotoBold from '../../../../components/fonts/RobotoBold';
import CommonPanelButton from '../../_common/CommonPanelButton';
import CommonPanelFormInput from '../../_common/CommonPanelFormInput';
import CommonPanelError from '../../_common/CommonPanelError';
//helpers
import {useAuthentication} from '../../../../utils/hooks';
//styles
import {resetPassword as styles} from './_styles';
//types
import {IPanelAuthForm, RootStackScreenProps} from '../../../../types/index';
import {theme} from '../../../../style/styles';

const INITIAL_FORM: IPanelAuthForm = {
  email: '',
};

const ResetPassword: React.FC = (): React.JSX.Element => {
  const [resetEmailForm, setResetEmailForm] =
    useState<IPanelAuthForm>(INITIAL_FORM);
  const {handleResetPassword, errors} = useAuthentication(resetEmailForm);
  const navigation =
    useNavigation<RootStackScreenProps<'AuthenticationModals'>['navigation']>();
  const [showConfirmationBaner, setShowConfirmationBaner] =
    useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({title: 'Resetuj hasło'});
  }, [navigation]);

  const handleEmail = (email: string): void => {
    setResetEmailForm({email});
  };

  if (showConfirmationBaner) {
    return (
      <RobotoBold
        style={styles.text}
        color={theme.color.black}
        size={theme.fontSize.fifteen}>
        Wiadomość została wysłana na Twoją skrzynkę odbiorczą.
      </RobotoBold>
    );
  }

  return (
    <View style={styles.container}>
      <RobotoBold
        style={styles.text}
        color={theme.color.black}
        size={theme.fontSize.fifteen}>
        Nie pamiętasz hasła?
      </RobotoBold>
      <RobotoRegular
        style={styles.text}
        color={theme.color.black}
        size={theme.fontSize.fifteen}>
        Podaj swój e-mail, jeśli mamy go w systemie, wyślemy Ci link do zmiany
        hasła.
      </RobotoRegular>
      <CommonPanelFormInput
        form={{
          placeholder: 'E-mail',
          handler: handleEmail,
          inputValue: resetEmailForm.email,
          secure: false,
        }}
      />
      <CommonPanelButton
        buttonData={{
          title: 'Wyślij',
          handler: () => handleResetPassword(setShowConfirmationBaner),
          accLabel: 'Kliknij, aby zresetować hasło.',
          accHint: 'Po kliknięciu rozpoczniesz proces resetowania hasła.',
          borderColor: theme.backgroundColor.black,
          backgroundColor: theme.backgroundColor.black,
          titleColor: theme.color.white,
          icon: null,
        }}
        align={'column'}
      />
      <View style={styles.errorWrapper}>
        {errors.length
          ? errors.map(error => {
              return <CommonPanelError key={error} error={error} />;
            })
          : null}
      </View>
    </View>
  );
};

export default ResetPassword;
