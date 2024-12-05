import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
//types
import {ICommonResponseWithoutTotal} from '../../../types/index.ts';
import {status} from '../../../types/enums';
import {IWolneLekturyBook} from '../../../types/index.ts';
//api
import {getWolneLekturyBooks} from '../../../api/wolneLektury/getWolneLekturyBooks.ts';
//components
import CommonError from '../../../components/CommonError';
import CommonLoading from '../../../components/CommonLoading';
import Tile from '../_common/Tile';
import CommonEmpty from '../../../components/CommonEmpty';
//styles
import {all as styles} from '../_styles.ts';

const Index: React.FC = (): JSX.Element => {
  const [response, setResponse] = useState<
    ICommonResponseWithoutTotal<IWolneLekturyBook[] | null>
  >({status: status.PENDING, data: null});

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
    return <Tile book={item} parent="all" />;
  };

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
