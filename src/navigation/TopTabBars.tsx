import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {moderateScale} from 'react-native-size-matters';
import {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
//utils
import {TOP_TAB_HEIGHT} from '../utils/constatnts';
//styles
import {theme} from '../style/styles';
//components
import RobotoMedium from '../components/fonts/RobotoMedium';

const TopTabBars: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
}): JSX.Element | null => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options}: {options: MaterialTopTabNavigationOptions} =
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
            }}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityHint={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                ...styles.button,
              }}>
              <View style={styles.buttonContentWrapper}>
                <RobotoMedium
                  color={isFocused ? theme.color.black : theme.color.darkGray}
                  size={theme.fontSize.ten}
                  style={styles.label}>
                  {label}
                </RobotoMedium>
              </View>
            </Pressable>
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
    height: TOP_TAB_HEIGHT,
    borderColor: theme.color.lightGray,
    borderBottomWidth: moderateScale(2),
    backgroundColor: theme.backgroundColor.white,
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
  },
  label: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default TopTabBars;
