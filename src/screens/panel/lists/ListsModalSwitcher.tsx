import React, {useMemo} from 'react';

//components
import AddList from './addList/Index';
import ExpandedList from './expandednList/Index';
import Error from '../../../components/CommonError';
//types
import {listModalScreenNames} from '../../../types/enums';
import {RootStackScreenProps} from '../../../types';

type Props = {
  route: RootStackScreenProps<'UserListsModals'>['route'];
};

const ListsModalSwitcher: React.FC<Props> = ({route}) => {
  const {screen} = route.params;

  const activeScreen = useMemo(() => {
    switch (screen) {
      case listModalScreenNames.ADD_LIST:
        return <AddList />;
      case listModalScreenNames.EXPANDED_LIST:
        return <ExpandedList />;
      default:
        return <Error />;
    }
  }, [screen]);

  return <>{activeScreen}</>;
};

export default ListsModalSwitcher;
