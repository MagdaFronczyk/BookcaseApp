import React from 'react';
import {ScrollView} from 'react-native';

import FastImage from 'react-native-fast-image';
//types
import {RootStackScreenProps} from '../../../types/navigation';
//components
import Details from './Details';
import BookImage from '../../../components/BookImage';
//services
import {STOARGE_KEY} from '../../../services/RNAsyncStorage';

type NYTBookScreenRouteProps =
  RootStackScreenProps<'SingleWolneLektury'>['route'];

type Props = {
  route: NYTBookScreenRouteProps;
};

const Index: React.FC<Props> = ({route}): JSX.Element => {
  const {book} = route.params;

  return (
    <ScrollView>
      <BookImage
        book={book}
        imageSource={{
          uri: book.simple_thumb,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        bookSource="WolneLektury"
        storageKey={STOARGE_KEY.FAVOURITE_WOLNE_LEKTURY}
      />
      <Details book={book} />
    </ScrollView>
  );
};

export default Index;
