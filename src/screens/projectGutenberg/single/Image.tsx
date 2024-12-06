import React, {useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {moderateScale} from 'react-native-size-matters';
import {useIsFocused} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
//styles
import {image as styles} from './_styles';
//types
import {IProjectGutenbergBook} from '../../../types';
//components
import LikeIcon from '../../../components/LikeIcon';
//styles
import {theme} from '../../../style/styles';
//services
import {
  getAndSetFavorites,
  STOARGE_KEY,
  toggleLike,
} from '../../../services/RNAsyncStorage/index';

type Props = {
  book: IProjectGutenbergBook;
};

const INITIAL_LIKE_ICON_SCALE = 1;
const END_LIKE_ICON_SCALE = 0.7;
export const LIKE_ICON_SIZE = moderateScale(41);

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Image: React.FC<Props> = ({book}): JSX.Element => {
  const isFocused = useIsFocused();
  const [isLiked, setLiked] = useState<boolean>(false);
  const [favouriteTitles, setFavouriteTitles] = useState<string[]>([]);
  const likeScale = useSharedValue<number>(INITIAL_LIKE_ICON_SCALE);

  useEffect(() => {
    getAndSetFavorites(
      setFavouriteTitles,
      STOARGE_KEY.FAVOURITE_PROJECT_GUTENBERG,
    );
  }, [isFocused]);

  useEffect(() => {
    setLiked(favouriteTitles.includes(book.title));
  }, [favouriteTitles, isLiked, book.title]);

  const handleLike = async (): Promise<void> => {
    likeScale.value = withSequence(
      withTiming(END_LIKE_ICON_SCALE),
      withTiming(INITIAL_LIKE_ICON_SCALE),
    );
    toggleLike(
      STOARGE_KEY.FAVOURITE_PROJECT_GUTENBERG,
      isLiked,
      book.title,
      setFavouriteTitles,
    );
  };

  const likeButtonAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{scale: likeScale.value}],
    }),
    [],
  );

  return (
    <>
      <FastImage
        accessible={true}
        accessibilityRole="image"
        accessibilityLabel={`okładka książki: ${book.title}`}
        accessibilityHint="Przedstawia okładkę wybranej książki"
        style={styles.image}
        source={require('../../../assets/icons/book.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.likeContainer}>
        <AnimatedPressable
          onPress={handleLike}
          accessibilityRole="button"
          accessibilityLabel={`${
            isLiked ? 'usuń polubienie' : 'dodaj polubienie'
          }`}
          accessibilityHint={`po naciśnięciu ${
            isLiked ? 'usuwa książkę z' : 'dodaje książkę do'
          } listy ulubionych`}
          style={[styles.likeIcon, likeButtonAnimatedStyle]}>
          <LikeIcon
            strokeColor={theme.color.black}
            color={isLiked ? theme.general.black : 'transparent'}
          />
        </AnimatedPressable>
      </View>
    </>
  );
};

export default Image;
