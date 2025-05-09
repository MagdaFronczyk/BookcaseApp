import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

import {StackScreenProps} from '@react-navigation/stack';
//types
import {INYTBook} from './newYorkTimes';
import {IWolneLekturyBook} from './wolneLektury';
import {IProjectGutenbergBook} from './index';
import { panelModalScreenNames } from './enums';

export type RootStackParamList = {
  DrawerNavigation: undefined;
  SingleNYTimes: {book: INYTBook};
  SingleWolneLektury: {book: IWolneLekturyBook};
  SingleProjectGutenberg: {book: IProjectGutenbergBook};
  WebViewScreen: {
    title: INYTBook['buy_links'][number]['name'] | 'Wolne Lektury';
    url: INYTBook['buy_links'][number]['url'] | IWolneLekturyBook['url'];
  };
  AuthenticationModals: {
    screen: panelModalScreenNames;
  };
  Informacje: undefined;
  Kontakt: undefined;
  Kalendarz: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type BottomTabParamList = {
  'New York Times': undefined;
  'Wolne Lektury': undefined;
  'Project Gutenberg': undefined;
  Panel: undefined;
};

export type BoottomTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type NewYorkTimesNavigationTabParamList = {
  AllNYTimes: undefined;
  FavoriteNYTimes: undefined;
};

export type WolneLekturyTabParamList = {
  AllWolneLektury: undefined;
  FavoriteWolneLektury: undefined;
};

export type PanelTabParamList = {
  Account: undefined;
  Lists: undefined;
};

export type DrawerNavigationParamList = {
  BottomNavigation: undefined;
};
