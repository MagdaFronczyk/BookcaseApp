import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
//types
import {BoottomTabScreenProps} from '../../../types/navigation';
import {
  COMMON_INIT_RESPONSE,
  ICommonResponseWithoutTotal,
  INYTBook,
} from '../../../types/index.ts';
import {status} from '../../../types/enums';
//api
import {getNYThardcoverFictionBestsellers} from '../../../api/getNYThardcoverFictionBestsellers';
//components
import CommonError from '../../../components/CommonError';
import CommonLoading from '../../../components/CommonLoading';
import Tile from '../_common/Tile';
import CommonEmpty from '../../../components/CommonEmpty';
//styles
import {all as styles} from '../_styles.ts';

type Props = {
  navigation: BoottomTabScreenProps<'New York Times'>['navigation'];
};

const Index: React.FC<Props> = ({navigation}): JSX.Element => {
  const [response, setResponse] = useState<
    ICommonResponseWithoutTotal<INYTBook[] | null>
  >({status: status.PENDING, data: null});

  useEffect(() => {
    console.warn(COMMON_INIT_RESPONSE);
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
    return item.rank.toString();
  };

  const renderItem = ({item}: {item: INYTBook}) => {
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