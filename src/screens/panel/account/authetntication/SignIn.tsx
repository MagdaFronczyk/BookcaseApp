import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {View} from 'react-native';

import {useIsFocused, useNavigation} from '@react-navigation/native';
//components
import CommonPanelButton from '../../_common/CommonPanelButton';
import CommonPanelFormInput from '../../_common/CommonPanelFormInput';
import CommonPanelError from '../../_common/CommonPanelError';
//helpers
import {useAuthentication} from '../../../../utils/hooks';
//styles
import {common} from './_styles';
import {theme} from '../../../../style/styles';
//types
import {
  IPanelFormData,
  IPanelAuthForm,
  RootStackScreenProps,
  IPanelButtonDataHashTable,
} from '../../../../types';
import {panelModalScreenNames} from '../../../../types/enums';

const INITIAL_FORM: IPanelAuthForm = {
  password: '',
  email: '',
};

const SignIn: React.FC = (): React.JSX.Element => {
  const [signInForm, setSignInForm] = useState<IPanelAuthForm>(INITIAL_FORM);
  const {handleSignIn, errors} = useAuthentication(signInForm);
  const navigation =
    useNavigation<RootStackScreenProps<'AuthenticationModals'>['navigation']>();
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.setOptions({title: 'Logowanie'});
  }, [navigation]);

  const handleEmail = (email: string): void => {
    setSignInForm((prev: {password: string}) => {
      return {
        password: prev.password,
        email: email,
      };
    });
  };

  const handlePassword = (password: string): void => {
    setSignInForm((prev: {email: string}) => {
      return {
        password: password,
        email: prev.email,
      };
    });
  };

  const handleResetPassword = useCallback((): void => {
    navigation.navigate('AuthenticationModals', {
      screen: panelModalScreenNames.RESET_PASSWORD,
    });
  }, [navigation]);

  useEffect(() => {
    if (!isFocused) {
      setSignInForm(INITIAL_FORM);
    }
  }, [isFocused]);

  const buttonData: IPanelButtonDataHashTable = useMemo(() => {
    return {
      signIn: {
        title: 'Zaloguj',
        handler: handleSignIn,
        accLabel: 'Kliknij, aby się zalogować',
        accHint: 'Po kliknięciu rozpoczniesz proces logowania.',
        borderColor: 'red',
        backgroundColor: theme.backgroundColor.black,
        titleColor: theme.color.white,
        icon: null,
      },
      password: {
        title: 'Nie pamiętasz hasła?',
        handler: handleResetPassword,
        accLabel: 'Kliknij, aby się zalogować',
        accHint: 'Po kliknięciu rozpoczniesz proces logowania.',
        borderColor: theme.color.black,
        backgroundColor: theme.backgroundColor.black,
        titleColor: theme.color.white,
        icon: null,
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSignIn, handleSignIn, handleResetPassword]);

  const formData: IPanelFormData[] = useMemo(() => {
    return [
      {
        placeholder: 'E-mail',
        handler: handleEmail,
        inputValue: signInForm.email,
        secure: false,
      },
      {
        placeholder: 'Hasło',
        handler: handlePassword,
        inputValue: signInForm.password || '',
        secure: true,
      },
    ];
  }, [signInForm.email, signInForm.password]);

  return (
    <View style={common.container}>
      {formData.map(form => {
        return <CommonPanelFormInput key={form.placeholder} form={form} />;
      })}
      <CommonPanelButton
        key={buttonData.signIn.title}
        buttonData={buttonData.signIn}
        align="column"
      />
      <CommonPanelButton
        key={buttonData.password.title}
        buttonData={buttonData.password}
        align="column"
      />
      <View style={common.errorWrapper}>
        {errors.length
          ? errors.map((error: string) => {
              return <CommonPanelError key={error} error={error} />;
            })
          : null}
      </View>
    </View>
  );
};

export default SignIn;
