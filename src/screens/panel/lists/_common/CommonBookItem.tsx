import React from 'react';
import {Pressable, View} from 'react-native';

import FastImage from 'react-native-fast-image';

//components
import RobotoRegular from '../../../../components/fonts/RobotoRegular';
//types
import {IUserListBook} from '../../../../types';
//styles
import {theme} from '../../../../style/styles';
import {bookItem as styles} from './_styles';

import DeleteIcon from '../../../../assets/icons/bin_icon.png';
import {removeUserLisBook} from '../../../../utils/lists/removeUserListBook';

type Props = {
  userListBook: IUserListBook;
};

const CommonBookItem: React.FC<Props> = ({userListBook}): JSX.Element => {
  const handleRemoveUserListBook = () => {
    removeUserLisBook(userListBook.bookId, userListBook.bookTitle);
  };

  return (
    <View style={styles.container}>
      <RobotoRegular size={theme.fontSize.thirteen} color={theme.color.black}>
        {`${userListBook.bookAuthor}, ${userListBook.bookTitle}`}
      </RobotoRegular>
      <Pressable
        style={({pressed}) => {
          return {
            opacity: pressed ? 0.7 : 1,
            backgroundColor: theme.backgroundColor.white,
            position: 'absolute',
            right: 10,
          };
        }}
        accessibilityRole="button"
        accessibilityLabel="Usuń ksiazke."
        accessibilityHint={`Po kliknięciu ksiazka: ${userListBook.bookTitle} zostanie usunięta.`}
        onPress={handleRemoveUserListBook}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          style={styles.removeButton}
          source={DeleteIcon}
        />
      </Pressable>
    </View>
  );
};

export default CommonBookItem;
