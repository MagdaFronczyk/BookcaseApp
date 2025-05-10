import React, {useState, useEffect, useMemo} from 'react';
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
//types
import {
  IPanelFormData,
  IPanelAuthForm,
  RootStackScreenProps,
  IPanelButtonDataHashTable,
} from '../../../../types';
import {theme} from '../../../../style/styles';

const INITIAL_FORM: IPanelAuthForm = {
  password: '',
  confirmedPassword: '',
  email: '',
};

const SignIn: React.FC = (): React.JSX.Element => {
  const [signUpForm, setSignUpForm] = useState<IPanelAuthForm>(INITIAL_FORM);
  const {handleSignUp, errors} = useAuthentication(signUpForm);

  const navigation =
    useNavigation<RootStackScreenProps<'AuthenticationModals'>['navigation']>();
  const isFocused = useIsFocused();

  useEffect(() => {
    navigation.setOptions({title: 'Rejestracja'});
  }, [navigation]);

  const handleEmail = (email: string): void => {
    setSignUpForm(prev => {
      return {
        ...prev,
        email: email,
      };
    });
  };

  const handlePassword = (password: string): void => {
    setSignUpForm(prev => {
      return {
        ...prev,
        password: password,
      };
    });
  };

  const handlePasswordConfirmed = (confirmedPassword: string): void => {
    setSignUpForm(prev => {
      return {
        ...prev,
        confirmedPassword: confirmedPassword,
      };
    });
  };

  useEffect(() => {
    if (!isFocused) {
      setSignUpForm(INITIAL_FORM);
    }
  }, [isFocused]);

  const buttonData: IPanelButtonDataHashTable = useMemo(() => {
    return {
      signUp: {
        title: 'Zarejestruj się',
        handler: handleSignUp,
        accLabel: 'Kliknij, aby utowrzyć konto.',
        accHint: 'Po kliknięciu rozpoczniesz proces tworzenia konta.',
        borderColor: theme.color.black,
        backgroundColor: theme.backgroundColor.black,
        titleColor: theme.color.white,
        icon: null,
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, handleSignUp]);

  const formData: IPanelFormData[] = useMemo(() => {
    return [
      {
        placeholder: 'E-mail',
        handler: handleEmail,
        inputValue: signUpForm.email,
        secure: false,
      },
      {
        placeholder: 'Hasło',
        handler: handlePassword,
        inputValue: signUpForm.password || '',
        secure: true,
      },
      {
        placeholder: 'Powtórz hasło',
        handler: handlePasswordConfirmed,
        inputValue: signUpForm.confirmedPassword || '',
        secure: true,
      },
    ];
  }, [signUpForm.email, signUpForm.password, signUpForm.confirmedPassword]);

  return (
    <View style={common.container}>
      {formData.map(form => {
        return <CommonPanelFormInput key={form.placeholder} form={form} />;
      })}
      <CommonPanelButton
        key={buttonData.signUp.title}
        buttonData={buttonData.signUp}
        align="column"
      />
      <View style={common.errorWrapper}>
        {errors.length &&
          errors.map((error: string) => {
            return <CommonPanelError key={error} error={error} />;
          })}
      </View>
    </View>
  );
};

export default SignIn;
