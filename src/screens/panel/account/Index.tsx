import React, {useMemo} from 'react';
import {View} from 'react-native';

//components
import Account from './Account';
import Authentication from './Authentication';
import CommonPending from '../../../components/CommonLoading';
//helpers
import {useFirebaseUser} from '../../../utils/hooks';
//styles
import {index as styles} from './_styles';

const Index: React.FC = (): React.JSX.Element => {
  const {user, initializing} = useFirebaseUser();

  const activeScreen = useMemo(() => {
    if (initializing) {
      return <CommonPending />;
    }
    if (user && user.uid) {
      return <Account />;
    }
    return <Authentication />;
  }, [user, initializing]);

  return <View style={styles.container}>{activeScreen}</View>;
};

export default Index;
