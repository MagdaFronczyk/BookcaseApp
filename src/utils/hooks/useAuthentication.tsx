import {useCallback, useMemo, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {getAuth} from '@react-native-firebase/auth';
//helpers
import {
  validateEmail,
  translateFirebaseErrors,
} from '../../utils/authentication';
//types
import {
  IPanelAuthForm,
  panelAuthErrors,
  RootStackScreenProps,
} from '../../types';
import {panelModalScreenNames} from '../../types/enums';

const MIN_EMAIL_LEN = 3;
const MIN_PASS_LEN = 0;
const PAUSE_TIME_BEFORE_REDIRECT_TO_LOGIN = 9000;

export const useAuthentication = (form: IPanelAuthForm) => {
  const [errors, setErrors] = useState<string[]>([]);
  const navigation =
    useNavigation<RootStackScreenProps<'AuthenticationModals'>['navigation']>();

  const authChecklist = useMemo(() => {
    const isEmailValid = validateEmail(form.email);
    const isEmailLenValid = form.email.length > MIN_EMAIL_LEN;
    const isPassLenValid = (form.password?.length || 0) > MIN_PASS_LEN;
    const isConfPassLenValid = form.confirmedPassword
      ? form.confirmedPassword.length > MIN_PASS_LEN
      : true;
    const isConfPassDifferent = form.password === form.confirmedPassword;
    return {
      isEmailValid,
      isEmailLenValid,
      isPassLenValid,
      isConfPassLenValid,
      isConfPassDifferent,
    };
  }, [form]);

  const handleSignUp = useCallback(() => {
    setErrors([]);
    if (
      !authChecklist.isEmailValid ||
      !authChecklist.isPassLenValid ||
      !authChecklist.isConfPassLenValid ||
      !authChecklist.isConfPassDifferent
    ) {
      if (!authChecklist.isEmailValid || !form.email.length) {
        setErrors(prev => {
          return [...prev, panelAuthErrors.wrongEmail];
        });
      }
      if (
        !authChecklist.isPassLenValid ||
        !form.password?.length ||
        !form.password
      ) {
        setErrors(prev => {
          return [...prev, panelAuthErrors.tooShortPassword];
        });
      }
      if (!authChecklist.isConfPassLenValid) {
        setErrors(prev => {
          return [...prev, panelAuthErrors.blankConfirmedPassword];
        });
      }
      if (!authChecklist.isConfPassDifferent) {
        setErrors(prev => {
          return [...prev, panelAuthErrors.differentConfirmedPassword];
        });
      }
      return;
    }
    getAuth()
      .createUserWithEmailAndPassword(form.email, form.password as string)
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        setErrors(prev => {
          return [...prev, translateFirebaseErrors(error)];
        });
      });
  }, [authChecklist, form.email, form.password, navigation]);

  const handleSignIn = useCallback(() => {
    setErrors([]);
    if (
      !authChecklist.isEmailValid ||
      !authChecklist.isEmailLenValid ||
      !authChecklist.isPassLenValid
    ) {
      if (!authChecklist.isEmailValid) {
        setErrors(prev => {
          return [...prev, panelAuthErrors.wrongEmail];
        });
      }
      if (!authChecklist.isEmailLenValid) {
        setErrors(prev => {
          return [...prev, panelAuthErrors.tooShortEmail];
        });
      }
      if (!authChecklist.isPassLenValid) {
        setErrors(prev => {
          return [...prev, panelAuthErrors.tooShortPassword];
        });
      }
      return;
    }
    getAuth()
      .signInWithEmailAndPassword(form.email, form.password as string)
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        setErrors(prev => {
          return [...prev, translateFirebaseErrors(error)];
        });
      });
  }, [
    authChecklist.isEmailLenValid,
    authChecklist.isEmailValid,
    authChecklist.isPassLenValid,
    form.email,
    form.password,
    navigation,
  ]);

  const handleResetPassword = useCallback(
    (
      setShowConfirmationBaner: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
      setErrors([]);
      if (!authChecklist.isEmailValid || !authChecklist.isEmailLenValid) {
        if (!authChecklist.isEmailValid) {
          setErrors(prev => {
            return [...prev, panelAuthErrors.wrongEmail];
          });
        }
        if (!authChecklist.isEmailLenValid) {
          setErrors(prev => {
            return [...prev, panelAuthErrors.tooShortEmail];
          });
        }
        return;
      }
      getAuth()
        .sendPasswordResetEmail(form.email)
        .then(() => {
          setShowConfirmationBaner(true);
          const timer = setTimeout(() => {
            return navigation.navigate('AuthenticationModals', {
              screen: panelModalScreenNames.SIGN_IN,
            });
          }, PAUSE_TIME_BEFORE_REDIRECT_TO_LOGIN);
          return () => {
            setShowConfirmationBaner(false);
            clearTimeout(timer);
          };
        })
        .catch(firebaseError => {
          setErrors(prev => {
            return [...prev, translateFirebaseErrors(firebaseError)];
          });
        });
    },
    [
      authChecklist.isEmailLenValid,
      authChecklist.isEmailValid,
      form.email,
      navigation,
    ],
  );

  return {
    handleSignIn,
    handleSignUp,
    handleResetPassword,
    errors,
  };
};
