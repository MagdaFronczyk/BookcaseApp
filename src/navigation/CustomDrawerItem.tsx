import React from 'react';

import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';

import {moderateScale} from 'react-native-size-matters';
//styles
import {theme} from '../style/styles';
//components
import RobotoMedium from '../components/fonts/RobotoMedium';

type Props = {
  accessibilityLabel: string;
  accesibilityHint: string;
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  imageSource: Source;
};

const CustomDrawerItem: React.FC<Props> = ({
  accessibilityLabel,
  accesibilityHint,
  onPress,
  title,
  imageSource,
}) => {
  return (
    <Pressable
      style={styles.item}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accesibilityHint}
      hitSlop={10}
      onPress={onPress}>
      <RobotoMedium color={theme.color.black} size={theme.fontSize.nineteen}>
        {title}
      </RobotoMedium>
      <FastImage
        accessible={true}
        accessibilityRole="image"
        accessibilityLabel={`logo ${title}`}
        accessibilityHint={`przedstawia logo ${title}`}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
        source={imageSource}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {width: moderateScale(40), height: moderateScale(40)},
});

export default CustomDrawerItem;
