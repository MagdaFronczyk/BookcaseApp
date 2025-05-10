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
      </RobotoMedium>
      <RobotoMedium
        color={theme.color.black}
        size={theme.fontSize.sixteen}
        style={styles.description}>
        Each book has its brief descrpion and book plot summary, some of them
        can be bought throug available links (New York Times) or downloaded for
        free (Wolne Lektury). Moreover, each book can be added to user's list of
        favourites.
      </RobotoMedium>
      <RobotoMedium
        color={theme.color.black}
        size={theme.fontSize.sixteen}
        style={styles.description}>
        Additionally, users can add events, such as marking the day when they
        started reading a new book, due to available calendar. Moreover, users
        have an opportunity to create their own accounts in order to create,
        modify, delete personal lists of books.
      </RobotoMedium>
      <RobotoMedium
        color={theme.color.black}
        size={theme.fontSize.sixteen}
        style={styles.description}>
        At this point, adding books to lists is not yet available
      </RobotoMedium>
    </View>
  );
};

export default Information;
