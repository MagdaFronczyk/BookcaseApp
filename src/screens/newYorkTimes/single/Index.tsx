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
import DropShadow from 'react-native-drop-shadow';
import FastImage from 'react-native-fast-image';
//styles
import {image as styles} from './_styles';
//types
import {RootStackScreenProps} from '../../../types/navigation';
//components
import LikeIcon from '../../../components/LikeIcon';
//styles
import {theme} from '../../../style/styles';
//services
import {
  getAndSetFavorites,
  STOARGE_KEY,
} from '../../../services/RNAsyncStorage/nytbooks';

type NYTBookScreenNavigationProps =
  RootStackScreenProps<'SingleNYTimes'>['navigation'];

type NYTBookScreenRouteProps = RootStackScreenProps<'SingleNYTimes'>['route'];

type Props = {
  navigation: NYTBookScreenNavigationProps;
  route: NYTBookScreenRouteProps;
};

const INITIAL_LIKE_ICON_SCALE = 1;
const END_LIKE_ICON_SCALE = 0.7;
const SHADOW_BUTTON_OPACITY = 0.12;
export const LIKE_ICON_SIZE = moderateScale(41);

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedShadow = Animated.createAnimatedComponent(DropShadow);

const Index: React.FC<Props> = ({navigation, route}): JSX.Element => {
  const isFocused = useIsFocused();
  const [isLiked, setLiked] = useState<boolean>(false);
  const [favouriteTitles, setFavouriteTitles] = useState<string[]>([]);
  const likeScale = useSharedValue<number>(INITIAL_LIKE_ICON_SCALE);
  const shadowOpacity = useSharedValue<number>(SHADOW_BUTTON_OPACITY);

  const {book} = route.params;

  useEffect(() => {
    getAndSetFavorites(setFavouriteTitles, STOARGE_KEY.FAVOURITE_NYTBOOKS);
  }, [isFocused]);

  useEffect(() => {
    setLiked(favouriteTitles.includes(book.title));
  }, [favouriteTitles, isLiked, book.title]);

  useEffect(() => {
    navigation.setOptions({title: book.title});
  });

  const handleLike = async (): Promise<void> => {
    likeScale.value = withSequence(
      withTiming(END_LIKE_ICON_SCALE),
      withTiming(INITIAL_LIKE_ICON_SCALE),
    );
    shadowOpacity.value = withSequence(
      withTiming(0),
      withTiming(SHADOW_BUTTON_OPACITY),
    );
  };

  const likeButtonAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{scale: likeScale.value}],
    }),
    [],
  );

  const likeShadowButtonAnimatedStyle = useAnimatedStyle(
    () => ({
      shadowOpacity: shadowOpacity.value,
    }),
    [],
  );

  return (
    <View>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
        source={{
          uri: book.book_image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
      />
      <View style={styles.likeContainer}>
        <AnimatedShadow
          style={[styles.heartShadow, likeShadowButtonAnimatedStyle]}>
          <AnimatedPressable
            onPress={handleLike}
            accessibilityRole="button"
            accessibilityLabel={`${
              isLiked ? 'usuń polubienie' : 'dodaj polubienie'
            }`}
            accessibilityHint={`po naciśnięciu ${
              isLiked ? 'usuwa podcast z' : 'dodaje podcast do'
            } listy ulubionych`}
            style={[styles.likeIcon, likeButtonAnimatedStyle]}>
            <LikeIcon
              strokeColor={theme.color.black}
              color={isLiked ? theme.general.black : 'transparent'}
            />
          </AnimatedPressable>
        </AnimatedShadow>
      </View>
    </View>
  );
};

export default Index;
