import React from 'react';
import {ScrollView} from 'react-native';

import FastImage from 'react-native-fast-image';
//components
import Details from './Details';
//types
import {RootStackScreenProps} from '../../../types/navigation';
import Image from '../../../components/BookImage';

type NYTBookScreenRouteProps = RootStackScreenProps<'SingleNYTimes'>['route'];

type Props = {
  route: NYTBookScreenRouteProps;
};

const Index: React.FC<Props> = ({route}): JSX.Element => {
  const {book} = route.params;

  return (
    <ScrollView>
      <Image
        imageSource={{
          uri: book.book_image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        book={book}
      />
      <Details book={book} />
    </ScrollView>
  );
};

export default Index;
