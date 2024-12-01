import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  BottomNavigation: undefined;
  SingleBritish: undefined;
  SingleGoogle: undefined;
  SinglePenguin: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type BottomTabParamList = {
  'British National Bibliography': undefined;
  'Google Books': undefined;
  'Penguin Publishing': undefined;
  Poetry: undefined;
  'Wolne Lektury': undefined;
};

export type BoottomTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type BritishNationalBibliographyNavigationStackParamList = {
  BritishNationalBibliographyNavigation: undefined;
};

export type BritishNationalBibliographyTabParamList = {
  AllBritish: undefined;
  FavoriteBritish: undefined;
};

export type GoogleBooksNavigationStackParamList = {
  GoogleBooksNavigation: undefined;
};

export type GoogleBooksTabParamList = {
  AllGoogle: undefined;
  FavoriteGoogle: undefined;
};

export type PenguinPublishingNavigationStackParamList = {
  PenguinPublishingNavigation: undefined;
};

export type PenguinPublishingTabParamList = {
  AllPenguin: undefined;
  FavoritePenguin: undefined;
};
