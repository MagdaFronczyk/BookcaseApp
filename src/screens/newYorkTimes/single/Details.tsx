import React from 'react';
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
import {IBuyLink, INYTBook} from '../../../types';
import {RootStackScreenProps} from '../../../types/navigation';

type Props = {
  book: INYTBook;
};

const Details: React.FC<Props> = ({book}): JSX.Element => {
  const navigation =
    useNavigation<RootStackScreenProps<'SingleNYTimes'>['navigation']>();

  const handleNavigation = (link: IBuyLink): void => {
    navigation.navigate('WebViewScreen', {
      title: link.name,
      url: link.url,
    });
  };

  const buyLinks = book.buy_links.map((link, index) => {
    return (
      <Pressable
        style={styles.buyLinksContainer}
        hitSlop={10}
        key={index}
        accessibilityRole="button"
        accessibilityLabel={`otwórz link do zakupu książki ${book.title}`}
        accessibilityHint={`przenosi do strony zakupu książki ${book.title}`}
        onPress={() => handleNavigation(link)}>
        <RobotoRegular
          color={theme.color.darkGray}
          size={theme.fontSize.thirteen}>
          {link.name}
        </RobotoRegular>
      </Pressable>
    );
  });

  return (
    <View style={styles.detailsContainer}>
      <RobotoBlack
        size={theme.fontSize.eighteen}
        color={theme.color.black}
        style={styles.title}>
        {book.title}
      </RobotoBlack>
      <RobotoMedium size={theme.fontSize.thirteen} color={theme.color.black}>
        Publisher: {book.publisher}
      </RobotoMedium>
      <RobotoMedium size={theme.fontSize.thirteen} color={theme.color.black}>
        Author: {book.author}
      </RobotoMedium>
      <RobotoRegular
        color={theme.color.black}
        size={theme.fontSize.thirteen}
        style={styles.description}>
        {book.description}
      </RobotoRegular>
      <RobotoMedium
        size={theme.fontSize.thirteen}
        color={theme.color.black}
        style={styles.buyLinks}>
        Buy links:
      </RobotoMedium>
      {buyLinks}
    </View>
  );
};

export default Details;
