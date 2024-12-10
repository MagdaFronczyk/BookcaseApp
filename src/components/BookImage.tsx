import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useIsFocused} from '@react-navigation/native';
import FastImage, {Source} from 'react-native-fast-image';
//types
import {
  INYTBook,
  IProjectGutenbergBook,
  IWolneLekturyBook,
} from '../types/index';
//components
import LikeIcon from './LikeIcon';
//styles
import {theme} from '../style/styles';
//services
import {
  getAndSetFavorites,
  STOARGE_KEY,
  toggleLike,
} from '../services/RNAsyncStorage/index';

type Props = {
  book: IWolneLekturyBook | IProjectGutenbergBook | INYTBook;
  imageSource: Source;
};

const INITIAL_LIKE_ICON_SCALE = 1;
const END_LIKE_ICON_SCALE = 0.7;
export const LIKE_ICON_SIZE = moderateScale(41);

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Image: React.FC<Props> = ({book, imageSource}): JSX.Element => {
  const isFocused = useIsFocused();
  const [isLiked, setLiked] = useState<boolean>(false);
  const [favouriteTitles, setFavouriteTitles] = useState<string[]>([]);
  const likeScale = useSharedValue<number>(INITIAL_LIKE_ICON_SCALE);

  useEffect(() => {
    getAndSetFavorites(setFavouriteTitles, STOARGE_KEY.FAVOURITE_WOLNE_LEKTURY);
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
      STOARGE_KEY.FAVOURITE_WOLNE_LEKTURY,
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
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
        source={imageSource}
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

const styles = StyleSheet.create({
  image: {
    aspectRatio: 2,
    marginTop: verticalScale(10),
  },
  likeContainer: {
    position: 'absolute',
    top: verticalScale(33),
    right: scale(27),
  },
  likeIcon: {
    width: LIKE_ICON_SIZE,
    height: LIKE_ICON_SIZE,
  },
});

export default Image;
