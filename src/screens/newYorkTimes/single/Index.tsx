import React from 'react';
import {ScrollView} from 'react-native';

//components
import Details from './Details';
import Image from './Image';
//types
import {RootStackScreenProps} from '../../../types/navigation';

type NYTBookScreenRouteProps = RootStackScreenProps<'SingleNYTimes'>['route'];

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
