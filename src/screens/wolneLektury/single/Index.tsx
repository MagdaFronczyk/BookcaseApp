import React from 'react';
import {ScrollView} from 'react-native';

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
    <ScrollView>
      <Image book={book} />
      <Details book={book} />
    </ScrollView>
  );
};

export default Index;
