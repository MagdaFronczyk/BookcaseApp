import React, {useMemo} from 'react';
import {View} from 'react-native';

//components
import Account from './account/Account';
import Authentication from './account/Authentication';
import CommonPending from '../../components/CommonLoading';

//helpers
import {useFirebaseUser} from '../../utils/hooks/useFirebaseUser';

// styles
import {index as styles} from './account/_styles';

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
