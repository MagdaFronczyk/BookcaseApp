import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
//types
import {
  ICommonResponseWithoutTotal,
  IProjectGutenbergBook,
} from '../../../types/index.ts';
import {status} from '../../../types/enums';
//api
import {getProjectGutenbergBooks} from '../../../api/projectGutenberg/getProjectGutenbergBooks.ts';
//components
import CommonError from '../../../components/CommonError';
import CommonLoading from '../../../components/CommonLoading';
import Tile from '../_common/Tile';
import CommonEmpty from '../../../components/CommonEmpty';
//styles
import {all as styles} from '../_style.ts';
//services
import {
  getAndSetFavorites,
  STOARGE_KEY,
} from '../../../services/RNAsyncStorage/index.ts';

const Index: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<
    ICommonResponseWithoutTotal<IProjectGutenbergBook[] | null>
  >({status: status.PENDING, data: null});
  const [favoriteBooks, setFavouriteBooks] = useState<IProjectGutenbergBook[]>(
    [],
  );
  const [favouriteBooksTitles, setFavouriteBooksTitles] = useState<string[]>(
    [],
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    const abortController = new AbortController();
    getProjectGutenbergBooks(setResponse, abortController);
  }, []);

  useEffect(() => {
    let checkAgain: NodeJS.Timeout;
    const abortController = new AbortController();
    if (response.status === status.REJECTED) {
      checkAgain = setTimeout(() => {
        getProjectGutenbergBooks(setResponse, abortController);
      }, 15000);
    }
    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
      }
    };
  }, [response]);

  useEffect(() => {
    getAndSetFavorites(
      setFavouriteBooksTitles,
      STOARGE_KEY.FAVOURITE_PROJECT_GUTENBERG,
    );
  }, [isFocused]);

  useEffect(() => {
    if (response.data && favouriteBooksTitles) {
      const favBooks: IProjectGutenbergBook[] = [];
      favouriteBooksTitles.forEach(title => {
        const favourites = response.data?.find(book => book.title === title);
        if (favourites) {
          favBooks.push(favourites);
        }
      });
      setFavouriteBooks(favBooks);
    }
  }, [favouriteBooksTitles, response]);

  const keyExtractor = (item: IProjectGutenbergBook) => {
    return item.title;
  };

  const renderItem = ({item}: {item: IProjectGutenbergBook}) => {
    return <Tile book={item} parent="fav" />;
  };

  const listEmptyComponent = (): JSX.Element => {
    return <CommonEmpty title="Aktualnie brak ulubionych książek." />;
  };

  if (response.status === status.REJECTED) {
    return <CommonError />;
  }

  if (response.status === status.PENDING) {
    return <CommonLoading />;
  }

  return (
    <FlatList
      data={favoriteBooks}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={listEmptyComponent}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.container}
      numColumns={2}
    />
  );
};

export default Index;
