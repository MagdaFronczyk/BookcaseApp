import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import FastImage from 'react-native-fast-image';
//types
import {ICommonResponseWithoutTotal, INYTBook} from '../../../types/index.ts';
import {status} from '../../../types/enums';
//api
import {getNYThardcoverFictionBestsellers} from '../../../api/newYorkTimes/getNYThardcoverFictionBestsellers.ts';
//components
import CommonError from '../../../components/CommonError';
import CommonLoading from '../../../components/CommonLoading';
import CommonEmpty from '../../../components/CommonEmpty';
import Tile from '../../../components/Tile.tsx';
//styles
import {all as styles} from '../_styles.ts';
//utils
import {useFavouriteNYT} from '../../../utils/useFavouriteNYT.ts';

const Index: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<
    ICommonResponseWithoutTotal<INYTBook[] | null>
  >({status: status.PENDING, data: null});

  const {favouriteNYTBooks} = useFavouriteNYT(response.data);

  useEffect(() => {
    const abortController = new AbortController();
    getNYThardcoverFictionBestsellers(setResponse, abortController);
  }, []);

  useEffect(() => {
    let checkAgain: NodeJS.Timeout;
    const abortController = new AbortController();
    if (response.status === status.REJECTED) {
      checkAgain = setTimeout(() => {
        getNYThardcoverFictionBestsellers(setResponse, abortController);
      }, 15000);
    }
    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
      }
    };
  }, [response]);

  const keyExtractor = (item: INYTBook) => {
    return item.title;
  };

  const renderItem = ({item}: {item: INYTBook}) => {
    return (
      <Tile
        book={item}
        parent="fav"
        imageSource={{
          uri: item.book_image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        navigationDestinantion="SingleNYTimes"
      />
    );
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
      data={favouriteNYTBooks}
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
