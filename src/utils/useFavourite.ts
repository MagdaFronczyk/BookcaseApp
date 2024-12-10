import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';

//types
import {INYTBook, IProjectGutenbergBook, IWolneLekturyBook} from '../types';
//services
import {
  getAndSetFavorites,
  STOARGE_KEY,
  toggleLike,
} from '../services/RNAsyncStorage';

export const useFavourite = (
  books: IWolneLekturyBook[] | INYTBook[] | IProjectGutenbergBook[] | null,
  storageKey: STOARGE_KEY,
  bookTitle?:
    | IWolneLekturyBook['title']
    | INYTBook['title']
    | IProjectGutenbergBook['title'],
) => {
  const isFocused = useIsFocused();
  const [favouriteBooksTitles, setFavouriteBooksTitles] = useState<string[]>(
    [],
  );
  const [isLiked, setLiked] = useState<boolean>(false);
  const [favouriteBooks, setFavouriteBooks] = useState<
    IWolneLekturyBook[] | INYTBook[] | IProjectGutenbergBook[]
  >([]);

  useEffect(() => {
    getAndSetFavorites(setFavouriteBooksTitles, storageKey);
  }, [isFocused, storageKey]);

  useEffect(() => {
    bookTitle && setLiked(favouriteBooksTitles.includes(bookTitle));
  }, [favouriteBooksTitles, isLiked, bookTitle]);

  useEffect(() => {
    if (books && favouriteBooksTitles) {
      const favBooks:
        | IWolneLekturyBook[]
        | INYTBook[]
        | IProjectGutenbergBook[] = [];
      favouriteBooksTitles.forEach(title => {
        const favourites = books.find(book => book.title === title);
        if (favourites) {
          favBooks.push(favourites);
        }
      });
      setFavouriteBooks(favBooks);
    }
  }, [favouriteBooksTitles, books]);

  const handleLike = async (): Promise<void> => {
    bookTitle &&
      toggleLike(
        STOARGE_KEY.FAVOURITE_WOLNE_LEKTURY,
        isLiked,
        bookTitle,
        setFavouriteBooksTitles,
      );
  };

  return {favouriteBooks, isLiked, handleLike};
};
