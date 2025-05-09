import React, {useMemo} from 'react';

//components
import SignIn from './SignIn';
import SignUp from './SignUp';
import ResetPassword from './ResetePassword';
import Error from '../../../../components/CommonError';
//types
import {panelModalScreenNames} from '../../../../types/enums';
import {RootStackScreenProps} from '../../../../types';
import {View} from 'react-native';

type Props = {
  route: RootStackScreenProps<'AuthenticationModals'>['route'];
};

const AuthModalSwitcher: React.FC<Props> = ({route}): React.JSX.Element => {
  const {screen} = route.params;

  const activeScreen = useMemo(() => {
    switch (screen) {
      case panelModalScreenNames.SIGN_IN:
        return <SignIn />;
      case panelModalScreenNames.SIGN_UP:
        return <SignUp />;
      case panelModalScreenNames.RESET_PASSWORD:
        return <ResetPassword />;
      default:
        return <Error />;
    }
  }, [screen]);

  return <View>{activeScreen}</View>;
};

export default AuthModalSwitcher;
