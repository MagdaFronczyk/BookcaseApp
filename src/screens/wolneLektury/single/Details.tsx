import React, {useEffect} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native-gesture-handler';
//components
import RobotoRegular from '../../../components/fonts/RobotoRegular';
import RobotoBlack from '../../../components/fonts/RobotoBlack';
import RobotoMedium from '../../../components/fonts/RobotoMedium';
//styles
import {theme} from '../../../style/styles';
import {details as styles} from './_styles';
//types
import {IWolneLekturyBook} from '../../../types';
import {RootStackScreenProps} from '../../../types/navigation';

type Props = {
  book: IWolneLekturyBook;
};

const Details: React.FC<Props> = ({book}): JSX.Element => {
  const navigation =
    useNavigation<RootStackScreenProps<'SingleNYTimes'>['navigation']>();

  const handleNavigation = (): void => {
    navigation.navigate('WebViewScreen', {
      title: 'Wolne Lektury',
      url: book.url,
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
      <RobotoMedium size={theme.fontSize.thirteen} color={theme.color.black}>
        Author: {book.author}
      </RobotoMedium>
      <RobotoMedium size={theme.fontSize.thirteen} color={theme.color.black}>
        Kind: {book.kind}
      </RobotoMedium>
      <RobotoMedium
        size={theme.fontSize.thirteen}
        color={theme.color.black}
        style={styles.buyLinks}>
        Download link:
      </RobotoMedium>
      <Pressable
        style={styles.downloadLinkContainer}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel={`otwórz link do pobrania książki ${book.title}`}
        accessibilityHint={`przenosi do strony pobrania książki ${book.title}`}
        onPress={handleNavigation}>
        <RobotoRegular
          color={theme.color.darkGray}
          size={theme.fontSize.thirteen}>
          {book.title}
        </RobotoRegular>
      </Pressable>
    </View>
  );
};

export default Details;
