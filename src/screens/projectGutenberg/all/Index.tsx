import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';

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
import CommonEmpty from '../../../components/CommonEmpty';
import Tile from '../../../components/Tile.tsx';
//images
import bookPlaceholder from '../../../assets/icons/book_gutenberg_icon.png';
//styles
import {all as styles} from '../_style.ts';

const Index: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<
    ICommonResponseWithoutTotal<IProjectGutenbergBook[] | null>
  >({status: status.PENDING, data: null});

  useEffect(() => {
    const abortController = new AbortController();
    getProjectGutenbergBooks(setResponse, abortController);
    return () => {
      abortController.abort();
    };
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
        abortController.abort();
      }
    };
  }, [response]);

  const keyExtractor = (item: IProjectGutenbergBook) => {
    return item.title;
  };

  const renderItem = useCallback(
    ({item}: {item: IProjectGutenbergBook}) => (
      <Tile
        book={item}
        parent="all"
        imageSource={bookPlaceholder}
        navigationDestinantion="SingleProjectGutenberg"
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
