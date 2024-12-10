import React from 'react';
import {View} from 'react-native';

//styles
import {information as styles} from './_styles';
import {theme} from '../../style/styles';
//components
import RobotoBlack from '../../components/fonts/RobotoBlack';
import RobotoMedium from '../../components/fonts/RobotoMedium';

const Information: React.FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <RobotoBlack
        color={theme.color.black}
        size={theme.fontSize.eighteen}
        style={styles.title}>
        About the app
      </RobotoBlack>
      <RobotoMedium
        color={theme.color.black}
        size={theme.fontSize.sixteen}
        style={styles.description}>
        BookcaseApp lets users get familiar with New York Times hardcover
        fiction bestsellers, Project Gutenberg books and Wolne Lektury Books.
        Each book has its brief descrpion and book plot summary, some of them
        can be bought throug available links (New York Times) or downloaded for
        free (Wolne Lektury). Moreover each book can be added to user's list of
        favourites.
      </RobotoMedium>
    </View>
  );
};

export default Information;
