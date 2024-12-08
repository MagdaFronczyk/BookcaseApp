import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {moderateScale, verticalScale} from 'react-native-size-matters';
//utils
import {BOTTOM_TAB_HEIGHT} from '../utils/constatnts';
//styles
import {theme} from '../style/styles';
//components
import RobotoMedium from '../components/fonts/RobotoMedium';
import BookIcon from '../components/BookIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BottomTabBars: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}): JSX.Element | null => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options}: {options: BottomTabNavigationOptions} =
          descriptors[route.key];

        const label =
          options.tabBarLabel?.toString() ?? options.title ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            style={{
              ...styles.buttonContentWrapper,
              height: isFocused
                ? BOTTOM_TAB_HEIGHT + moderateScale(5)
                : BOTTOM_TAB_HEIGHT,
            }}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityHint={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={index}
              style={styles.button}>
              <View style={styles.buttonContentWrapper}>
                <BookIcon
                  height={moderateScale(20)}
                  width={moderateScale(20)}
                  fill={
                    isFocused
                      ? theme.backgroundColor.black
                      : theme.backgroundColor.darkGray
                  }
                />
                <RobotoMedium
                  color={isFocused ? theme.color.black : theme.color.darkGray}
                  size={theme.fontSize.ten}
                  style={styles.label}>
                  {label}
                </RobotoMedium>
              </View>
            </Pressable>
            {!isFocused && <View style={styles.line} />}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: BOTTOM_TAB_HEIGHT,
  },
  buttonContentWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: moderateScale(1),
    borderRightWidth: moderateScale(1),
    borderTopWidth: moderateScale(1),
    borderColor: theme.color.lightGray,
    backgroundColor: theme.backgroundColor.white,
  },
  label: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: verticalScale(2),
    backgroundColor: theme.color.lightGray,
  },
});

export default BottomTabBars;
