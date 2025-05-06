import React, {useCallback, useEffect, useState} from 'react';
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
//styles
import {all as styles} from '../_styles.ts';
import Tile from '../../../components/Tile.tsx';

const Index: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<
    ICommonResponseWithoutTotal<INYTBook[] | null>
  >({status: status.PENDING, data: null});

  useEffect(() => {
    const abortController = new AbortController();
    getNYThardcoverFictionBestsellers(setResponse, abortController);
    return () => {
      abortController.abort();
    };
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
        abortController.abort();
      }
    };
  }, [response]);

  const keyExtractor = (item: INYTBook) => {
    return item.title;
  };

  const renderItem = useCallback(
    ({item}: {item: INYTBook}) => (
      <Tile
        book={item}
        parent="all"
        imageSource={{
          uri: item.book_image,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        navigationDestinantion="SingleNYTimes"
      />
    ),
    [],
  );

  const listEmptyComponent = (): JSX.Element => {
    return (
      <CommonEmpty title="Aktualnie brak książek." text="Zapraszamy wkrótce." />
    );
  };

  if (response.status === status.REJECTED) {
    return <CommonError />;
  }

  if (response.status === status.PENDING) {
    return <CommonLoading />;
  }

  return (
    <FlatList
      data={response.data}
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
