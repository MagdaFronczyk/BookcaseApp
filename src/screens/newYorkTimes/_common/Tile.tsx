import React from 'react';
import {Pressable, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
//components
import RobotoBlack from '../../../components/fonts/RobotoBlack';
import FastImage from 'react-native-fast-image';
import DropShadow from 'react-native-drop-shadow';
import LikeIcon from '../../../components/LikeIcon';
//styles
import {theme} from '../../../style/styles';
import {tile as styles} from '../_styles.ts';
//types
import {INYTBook} from '../../../types/NYT';
import {BoottomTabScreenProps} from '../../../types/navigation';

type NYTBooksScreenNavigationProps =
  BoottomTabScreenProps<'New York Times'>['navigation'];

type Props = {
  book: INYTBook;
  parent: 'fav' | 'all';
};

const Tile: React.FC<Props> = ({book, parent}): JSX.Element | null => {
  const navigation = useNavigation<NYTBooksScreenNavigationProps>();

  const handleNavigation = (): void => {
    navigation.navigate('SingleNYTimes', {
      book: book,
    });
  };

  return (
    <Pressable
      style={styles.wrapper}
      hitSlop={10}
      accessibilityRole="button"
      accessibilityLabel={`otwórz książkę ${book.title}`}
      accessibilityHint="przenosi do widoku książki"
      onPress={handleNavigation}>
      <FastImage
        accessible={true}
        accessibilityRole="image"
        accessibilityLabel={`okładka książki: ${book.title}`}
        accessibilityHint="Przedstawia zdjęcie wybranego podcastu"
        style={styles.image}
        source={{
          uri: book.book_image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}>
        {parent === 'fav' && (
          <DropShadow style={styles.heartShadow}>
            <View style={styles.likeContainer}>
              <LikeIcon
                strokeColor={theme.color.black}
                color={theme.color.black}
              />
            </View>
          </DropShadow>
        )}
      </FastImage>
      <RobotoBlack
        style={styles.title}
        color={theme.color.black}
        size={theme.fontSize.twelve}>
        {book.title}
      </RobotoBlack>
    </Pressable>
  );
};

export default Tile;
