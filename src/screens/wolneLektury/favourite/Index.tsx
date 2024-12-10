import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import FastImage from 'react-native-fast-image';
//types
import {
  ICommonResponseWithoutTotal,
  IWolneLekturyBook,
} from '../../../types/index.ts';
import {status} from '../../../types/enums';
//api
import {getWolneLekturyBooks} from '../../../api/wolneLektury/getWolneLekturyBooks.ts';
//components
import CommonError from '../../../components/CommonError';
import CommonLoading from '../../../components/CommonLoading';
import Tile from '../../../components/Tile.tsx';
import CommonEmpty from '../../../components/CommonEmpty';
//styles
import {all as styles} from '../_styles.ts';
//services
import {useFavouriteProjectWolneLektury} from '../../../utils/useFavouriteWolneLektury.ts';

const Index: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<
    ICommonResponseWithoutTotal<IWolneLekturyBook[] | null>
  >({status: status.PENDING, data: null});

  const {favouriteWolneLektury} = useFavouriteProjectWolneLektury(
    response.data,
  );

  useEffect(() => {
    const abortController = new AbortController();
    getWolneLekturyBooks(setResponse, abortController);
  }, []);

  useEffect(() => {
    let checkAgain: NodeJS.Timeout;
    const abortController = new AbortController();
    if (response.status === status.REJECTED) {
      checkAgain = setTimeout(() => {
        getWolneLekturyBooks(setResponse, abortController);
      }, 15000);
    }
    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
      }
    };
  }, [response]);

  const keyExtractor = (item: IWolneLekturyBook) => {
    return item.title;
  };

  const renderItem = ({item}: {item: IWolneLekturyBook}) => {
    return (
      <Tile
        book={item}
        parent="fav"
        imageSource={{
          uri: item.simple_thumb,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        navigationDestinantion="SingleWolneLektury"
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
      data={favouriteWolneLektury}
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
