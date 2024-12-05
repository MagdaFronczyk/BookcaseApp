import React from 'react';

//components
import Details from './Details';
import Image from './Image';
//types
import {RootStackScreenProps} from '../../../types/navigation';

type NYTBookScreenNavigationProps =
  RootStackScreenProps<'SingleNYTimes'>['navigation'];

type NYTBookScreenRouteProps = RootStackScreenProps<'SingleNYTimes'>['route'];

type Props = {
  route: NYTBookScreenRouteProps;
};

const Index: React.FC<Props> = ({route}): JSX.Element => {
  const {book} = route.params;

  return (
    <>
      <Image book={book} />
      <Details book={book} />
    </>
  );
};

export default Index;
