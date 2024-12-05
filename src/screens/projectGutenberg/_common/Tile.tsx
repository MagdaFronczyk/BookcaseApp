import React from 'react';
import {Dimensions, Pressable, View} from 'react-native';

import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
//components
import RobotoBlack from '../../../components/fonts/RobotoBlack';
import LikeIcon from '../../../components/LikeIcon';
import BookIcon from '../../../components/BookIcon.tsx';
//styles
import {theme} from '../../../style/styles';
import {tile as styles} from '../_style.ts';
//types
import {BoottomTabScreenProps} from '../../../types/navigation';
import {IProjectGutenbergBook} from '../../../types/index.ts';

type ProjectGutenbergBooksScreenNavigationProps =
  BoottomTabScreenProps<'Project Gutenberg'>['navigation'];

type Props = {
  book: IProjectGutenbergBook;
  parent: 'fav' | 'all';
};

const {width} = Dimensions.get('window');

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
      <BookIcon
        width={width * 0.44}
        height={width * 0.44}
        fill={theme.backgroundColor.darkGray}
        style={styles.image}>
        {parent === 'fav' && (
          <View style={styles.likeContainer}>
            <LikeIcon
              strokeColor={theme.color.black}
              color={theme.color.black}
            />
          </View>
        )}
      </BookIcon>
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
