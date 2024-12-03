import React from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
//components
import RobotoRegular from '../../../components/fonts/RobotoRegular';
import RobotoBlack from '../../../components/fonts/RobotoBlack';
import RobotoMedium from '../../../components/fonts/RobotoMedium';
//styles
import {theme} from '../../../style/styles';
import {details as styles} from './_styles';
//types
import {INYTBook} from '../../../types';
import {RootStackScreenProps} from '../../../types/navigation';

type Props = {
  book: INYTBook;
};

const Details: React.FC<Props> = ({book}): JSX.Element => {
  const navigation =
    useNavigation<RootStackScreenProps<'SingleNYTimes'>['navigation']>();

  const handleNavigation = (): void => {
    navigation.navigate('WebViewScreen', {
      title: book.title,
      url: book.first_chapter_link,
    });
  };
  return (
    <View style={styles.detailsContainer}>
      <RobotoBlack
        size={theme.fontSize.eighteen}
        color={theme.color.black}
        style={styles.title}>
        {book.title}
      </RobotoBlack>
      <View>
        <RobotoMedium size={theme.fontSize.thirteen} color={theme.color.black}>
          Publisher: {book.publisher}
        </RobotoMedium>
        <RobotoMedium size={theme.fontSize.thirteen} color={theme.color.black}>
          Author: {book.author}
        </RobotoMedium>
      </View>
      <RobotoRegular
        color={theme.color.black}
        size={theme.fontSize.thirteen}
        style={styles.description}>
        {book.description}
      </RobotoRegular>
    </View>
  );
};

export default Details;
