import React from 'react';
import {ScrollView} from 'react-native';

import FastImage from 'react-native-fast-image';
//types
import {RootStackScreenProps} from '../../../types/navigation';
//components
import Details from './Details';
import Image from '../../../components/BookImage';

type NYTBookScreenRouteProps =
  RootStackScreenProps<'SingleWolneLektury'>['route'];

type Props = {
  route: NYTBookScreenRouteProps;
};

const Index: React.FC<Props> = ({route}): JSX.Element => {
  const {book} = route.params;

  return (
    <ScrollView>
      <Image
        book={book}
        imageSource={{
          uri: book.simple_thumb,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
      />
      <Details book={book} />
    </ScrollView>
  );
};

export default Index;
