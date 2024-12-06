import React from 'react';
import {View} from 'react-native';

//components
import RobotoBlack from '../../../components/fonts/RobotoBlack';
import RobotoMedium from '../../../components/fonts/RobotoMedium';
//styles
import {theme} from '../../../style/styles';
import {details as styles} from './_styles';
//types
import {IProjectGutenbergBook} from '../../../types';
import RobotoRegular from '../../../components/fonts/RobotoRegular';

type Props = {
  book: IProjectGutenbergBook;
};

const Details: React.FC<Props> = ({book}): JSX.Element => {
  const authors = book.authors.map((author, index) => {
    return (
      <RobotoRegular
        key={index}
        size={theme.fontSize.thirteen}
        color={theme.color.black}>
        {author.name}
      </RobotoRegular>
    );
  });

  const subjects = book.subjects.map((subject, index) => {
    return (
      <RobotoRegular
        key={index}
        size={theme.fontSize.thirteen}
        color={theme.color.black}>
        {subject}
      </RobotoRegular>
    );
  });

  const shelves = book.bookshelves.map((shelf, index) => {
    return (
      <RobotoRegular
        key={index}
        size={theme.fontSize.thirteen}
        color={theme.color.black}>
        {shelf}
      </RobotoRegular>
    );
  });

  return (
    <View style={styles.detailsContainer}>
      <RobotoBlack
        size={theme.fontSize.eighteen}
        color={theme.color.black}
        style={[styles.title, styles.details]}>
        {book.title}
      </RobotoBlack>
      <RobotoMedium
        size={theme.fontSize.thirteen}
        color={theme.color.black}
        style={styles.details}>
        Authors:
      </RobotoMedium>
      {authors}
      <RobotoMedium
        size={theme.fontSize.thirteen}
        color={theme.color.black}
        style={styles.details}>
        Subjects:
      </RobotoMedium>
      {subjects}
      <RobotoMedium
        size={theme.fontSize.thirteen}
        color={theme.color.black}
        style={styles.details}>
        Bookshelves:
      </RobotoMedium>
      {shelves}
      <RobotoMedium
        size={theme.fontSize.thirteen}
        color={theme.color.black}
        style={styles.details}>
        Download count: {book.download_count}
      </RobotoMedium>
    </View>
  );
};

export default Details;
