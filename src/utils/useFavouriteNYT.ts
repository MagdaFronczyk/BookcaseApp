import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';

//types
import {INYTBook} from '../types';
//services
import {
  getAndSetFavorites,
  STOARGE_KEY,
  toggleLike,
} from '../services/RNAsyncStorage';

export const useFavouriteNYT = (
  books: INYTBook[] | null,
  bookTitle?: INYTBook['title'],
) => {
  const isFocused = useIsFocused();
  const [favouriteBooksTitles, setFavouriteBooksTitles] = useState<string[]>(
    [],
  );
  const [isLikedNYT, setLiked] = useState<boolean>(false);
  const [favouriteNYTBooks, setFavouriteBooks] = useState<INYTBook[]>([]);

  useEffect(() => {
    getAndSetFavorites(setFavouriteBooksTitles, STOARGE_KEY.FAVOURITE_NYTBOOKS);
  }, [isFocused]);

  useEffect(() => {
    bookTitle && setLiked(favouriteBooksTitles.includes(bookTitle));
  }, [favouriteBooksTitles, isLikedNYT, bookTitle]);

  useEffect(() => {
    if (books && favouriteBooksTitles) {
      const favBooks: INYTBook[] = [];
      favouriteBooksTitles.forEach(title => {
        const favourites = books.find(book => book.title === title);
        if (favourites) {
          favBooks.push(favourites);
        }
      });
      setFavouriteBooks(favBooks);
    }
  }, [favouriteBooksTitles, books]);

  const handleLikeWolneLektury = async (): Promise<void> => {
    bookTitle &&
      toggleLike(
        STOARGE_KEY.FAVOURITE_NYTBOOKS,
        isLikedNYT,
        bookTitle,
        setFavouriteBooksTitles,
      );
  };

  return {
    favouriteNYTBooks,
    isLikedNYT,
    handleLikeWolneLektury,
  };
};
