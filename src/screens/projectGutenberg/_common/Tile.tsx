import React from 'react';
import {Pressable, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
//components
import RobotoBlack from '../../../components/fonts/RobotoBlack';
import LikeIcon from '../../../components/LikeIcon';
//styles
import {theme} from '../../../style/styles';
import {tile as styles} from '../_style.ts';
//types
import {BoottomTabScreenProps} from '../../../types/navigation';
import {IProjectGutenbergBook} from '../../../types/index.ts';
import FastImage from 'react-native-fast-image';

type ProjectGutenbergBooksScreenNavigationProps =
  BoottomTabScreenProps<'Project Gutenberg'>['navigation'];

type Props = {
  book: IProjectGutenbergBook;
  parent: 'fav' | 'all';
};

const Tile: React.FC<Props> = ({book, parent}): JSX.Element | null => {
  const navigation =
    useNavigation<ProjectGutenbergBooksScreenNavigationProps>();

  const handleNavigation = (): void => {
    navigation.navigate('SingleProjectGutenberg', {
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
        accessibilityHint="Przedstawia okładkę wybranej książki"
        style={styles.image}
        source={require('../../../assets/icons/book.png')}
        resizeMode={FastImage.resizeMode.contain}>
        {parent === 'fav' && (
          <View style={styles.likeContainer}>
            <LikeIcon
              strokeColor={theme.color.black}
              color={theme.color.black}
            />
          </View>
        )}
      </FastImage>
      <RobotoBlack
        style={styles.title}
        color={theme.color.black}
        size={theme.fontSize.ten}>
        {book.title}
      </RobotoBlack>
    </Pressable>
  );
};

export default Tile;
