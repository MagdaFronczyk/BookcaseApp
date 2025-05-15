import React from 'react';
import {View} from 'react-native';

import FastImage from 'react-native-fast-image';

//components
import RobotoRegular from '../../../../components/fonts/RobotoRegular';
//types
import {IUserListBook} from '../../../../types';
//styles
import {theme} from '../../../../style/styles';
import {bookItem as styles} from './_styles';

import DeleteIcon from '../../../../assets/icons/bin_icon.png';

type Props = {
  userListBook: IUserListBook;
};

const CommonBookItem: React.FC<Props> = ({userListBook}): JSX.Element => {
  return (
    <View style={styles.container}>
      <RobotoRegular size={theme.fontSize.thirteen} color={theme.color.black}>
        {`${userListBook.bookAuthor}, ${userListBook.bookTitle}`}
      </RobotoRegular>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
        source={DeleteIcon}
      />
    </View>
  );
};

export default CommonBookItem;
