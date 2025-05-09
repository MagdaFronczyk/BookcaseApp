import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
//components
import CustomDrawerItem from './CustomDrawerItem';

type Props = {
  navigation: DrawerContentComponentProps['navigation'];
};

const CustomDrawerContent: React.FC<Props> = ({navigation}): JSX.Element => {
  const handleNavigateToKontakt = (): void => {
    navigation.navigate('Kontakt');
    navigation.closeDrawer();
  };
  const handleNavigateToKalndarz = (): void => {
    navigation.navigate('Kalendarz');
    navigation.closeDrawer();
  };

  const handleNavigateToInformacje = (): void => {
    navigation.navigate('Informacje');
    navigation.closeDrawer();
  };

  const handleNavigateToGithub = (): void => {
    navigation.navigate('WebViewScreen', {
      title: 'Github',
      url: 'https://github.com/MagdaFronczyk',
    });
    navigation.closeDrawer();
  };

  const handleNavigateToLinkedin = (): void => {
    navigation.navigate('WebViewScreen', {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/magdalena-fronczyk',
    });
    navigation.closeDrawer();
  };

  const items = [
    {
      accessibilityLabel: 'przejdź do strony informacji',
      accessibilityHint: 'przenosi do strony informacji',
      onPress: handleNavigateToInformacje,
      title: 'Informacje',
      imageSource: require('../assets/icons/book_icon.png'),
    },
    {
      accessibilityLabel: 'przejdź do strony kontaktu',
      accessibilityHint: 'przenosi do strony kontaktu',
      onPress: handleNavigateToKontakt,
      title: 'Kontakt',
      imageSource: require('../assets/icons/contact_icon.png'),
    },
    {
      accessibilityLabel: 'przejdź do strony Kalendarza',
      accessibilityHint: 'przenosi do strony Kalendarza',
      onPress: handleNavigateToKalndarz,
      title: 'Kalendarz',
      imageSource: require('../assets/icons/calendar_icon.png'),
    },
    {
      accessibilityLabel: 'przejdź do strony github',
      accessibilityHint: 'przenosi do strony github',
      onPress: handleNavigateToGithub,
      title: 'Github',
      imageSource: require('../assets/icons/github_logo_icon.png'),
    },
    {
      accessibilityLabel: 'przejdź do strony linkedin',
      accessibilityHint: 'przenosi do strony linkedin',
      onPress: handleNavigateToLinkedin,
      title: 'Linkedin',
      imageSource: require('../assets/icons/linkedin_logo_icon.png'),
    },
  ];

  return (
    <DrawerContentScrollView>
      {items.map((item, index) => {
        return (
          <CustomDrawerItem
            key={index}
            accesibilityHint={item.accessibilityHint}
            accessibilityLabel={item.accessibilityLabel}
            onPress={item.onPress}
            title={item.title}
            imageSource={item.imageSource}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
