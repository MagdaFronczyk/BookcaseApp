import React, {memo} from 'react';
import {Pressable, StyleSheet, View, Dimensions} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
//components
import RobotoBlack from './fonts/RobotoBlack';
import LikeIcon from './icons/LikeIcon.tsx';
//styles
import {theme} from '../style/styles.ts';
//types
import {BoottomTabScreenProps} from '../types/navigation.ts';
import {
  INYTBook,
  IProjectGutenbergBook,
  IWolneLekturyBook,
} from '../types/index.ts';

type ProjectGutenbergBooksScreenNavigationProps =
  BoottomTabScreenProps<'Project Gutenberg'>['navigation'];
type WolneLekturyBooksScreenNavigationProps =
  BoottomTabScreenProps<'Wolne Lektury'>['navigation'];
type NYTBooksScreenNavigationProps =
  BoottomTabScreenProps<'New York Times'>['navigation'];

type Props = {
  book: IProjectGutenbergBook | IWolneLekturyBook | INYTBook;
  parent: 'fav' | 'all';
  imageSource: Source;
  navigationDestinantion: any;
};

const {width} = Dimensions.get('screen');

const Tile = memo(function Tile({
  book,
  parent,
  imageSource,
  navigationDestinantion,
}: Props) {
  const navigation = useNavigation<
    | ProjectGutenbergBooksScreenNavigationProps
    | WolneLekturyBooksScreenNavigationProps
    | NYTBooksScreenNavigationProps
  >();

  const handleNavigation = (): void => {
    navigation.navigate(navigationDestinantion, {book: book});
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
        source={imageSource}
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
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: moderateScale(10),
  },
  image: {
    width: width * 0.44,
    aspectRatio: 1,
  },
  title: {
    flex: 1,
    width: width * 0.44,
    flexWrap: 'wrap',
    letterSpacing: moderateScale(0.48),
    textAlign: 'center',
    marginTop: verticalScale(5),
    marginBottom: verticalScale(5),
  },
  likeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.general.white,
    height: scale(41),
    aspectRatio: 1,
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Tile;
