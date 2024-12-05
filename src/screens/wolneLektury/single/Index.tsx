import React from 'react';

//types
import {RootStackScreenProps} from '../../../types/navigation';
//components
import Image from './Image';
import Details from './Details';

type NYTBookScreenRouteProps =
  RootStackScreenProps<'SingleWolneLektury'>['route'];

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
