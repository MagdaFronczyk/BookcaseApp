import AsyncStorage from '@react-native-async-storage/async-storage';

export enum STOARGE_KEY {
  FAVOURITE_NYTBOOKS = '@liked_nytbooks',
  FAVOURITE_WOLNE_LEKTURY = '@liked_wolnelektury',
}

export const getAsyncData = async (key: STOARGE_KEY) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // console.error(e);
  }
};

export const getAndSetFavorites = async (
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>,
  key: STOARGE_KEY,
): Promise<void> => {
  try {
    const favourites: string[] = await getAsyncData(key);
    if (favourites !== null) {
      setFavorites(favourites);
    }
  } catch (err) {
    // console.error(err);
  }
};

export const addFavouriteToLocalStorage = async (
  title: string,
  key: STOARGE_KEY,
) => {
  try {
    const favouritesInAsyncStorage: string[] = await getAsyncData(key);
    await AsyncStorage.setItem(
      key,
      favouritesInAsyncStorage
        ? JSON.stringify([...favouritesInAsyncStorage, title])
        : JSON.stringify([title]),
    );
  } catch (e) {
    // console.error(e);
  }
};

export const removeFavouriteFromLocalStorage = async (
  value: string,
  key: STOARGE_KEY,
) => {
  try {
    const favouritesInAsyncStorage: string[] = await getAsyncData(key);
    const favUpdated = favouritesInAsyncStorage.filter(item => item !== value);
    await AsyncStorage.setItem(key, JSON.stringify([...favUpdated]));
  } catch (e) {
    // console.error(e);
  }
};

export const toggleLike = async (
  key: STOARGE_KEY,
  isLiked: boolean,
  title: string,
  setFavouriteTitles: React.Dispatch<React.SetStateAction<string[]>>,
): Promise<void> => {
  if (!isLiked) {
    try {
      await addFavouriteToLocalStorage(title, key);
    } catch (err) {
      // console.error(err);
    } finally {
      setFavouriteTitles(prev => [...prev, title]);
    }
  } else {
    try {
      await removeFavouriteFromLocalStorage(title, key);
    } catch (err) {
      // console.error(err);
    } finally {
      setFavouriteTitles(prev =>
        prev.filter(prevTitle => {
          return prevTitle !== title;
        }),
      );
    }
  }
};
