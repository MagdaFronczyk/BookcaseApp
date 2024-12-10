import React from 'react';
import {ScrollView} from 'react-native';

//components
import Image from '../../../components/BookImage';
import Details from './Details';
//types
import {RootStackScreenProps} from '../../../types/navigation';

type NYTBookScreenRouteProps =
  RootStackScreenProps<'SingleProjectGutenberg'>['route'];

type Props = {
  route: NYTBookScreenRouteProps;
};

const Index: React.FC<Props> = ({route}): JSX.Element => {
  const {book} = route.params;

  return (
    <ScrollView>
      <Image
        imageSource={require('../../../assets/icons/book.png')}
        book={book}
      />
      <Details book={book} />
    </ScrollView>
  );
};

export default Index;
