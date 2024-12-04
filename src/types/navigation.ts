import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

import {StackScreenProps} from '@react-navigation/stack';
//types
import {INYTBook} from './nyt';
import {IWolneLekturyBook} from './wolneLektury';

export type RootStackParamList = {
  BottomNavigation: undefined;
  SingleNYTimes: {book: INYTBook};
  SingleWolneLektury: {book: IWolneLekturyBook};
  SingleBible: undefined;
  WebViewScreen: {
    title: INYTBook['buy_links'][number]['name'] | 'Wolne Lektury';
    url: INYTBook['buy_links'][number]['url'] | IWolneLekturyBook['url'];
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type BottomTabParamList = {
  'New York Times': undefined;
  'Wolne Lektury': undefined;
  Bible: undefined;
};

export type BoottomTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type NewYorkTimesNavigationStackParamList = {
  NewYorkTimesNavigation: undefined;
};

export type NewYorkTimesNavigationTabParamList = {
  AllNYTimes: undefined;
  FavoriteNYTimes: undefined;
};

export type WolneLekturyNavigationStackParamList = {
  WolneLekturyNavigation: undefined;
};

export type WolneLekturyTabParamList = {
  AllWolneLektury: undefined;
  FavoriteWolneLektury: undefined;
};

export type BibleNavigationStackParamList = {
  BibleNavigation: undefined;
};

export type BibleTabParamList = {
  AllBible: undefined;
  FavoriteBible: undefined;
};
