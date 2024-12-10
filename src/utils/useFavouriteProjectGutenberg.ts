import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';

//types
import {IProjectGutenbergBook} from '../types';
//services
import {
  getAndSetFavorites,
  STOARGE_KEY,
  toggleLike,
} from '../services/RNAsyncStorage';

export const useFavouriteProjectGutenberg = (
  books: IProjectGutenbergBook[] | null,
  bookTitle?: IProjectGutenbergBook['title'],
) => {
  const isFocused = useIsFocused();
  const [favouriteBooksTitles, setFavouriteBooksTitles] = useState<string[]>(
    [],
  );
  const [isLikedProjectGutenberg, setLiked] = useState<boolean>(false);
  const [favouriteBooksProjectGutenberg, setFavouriteBooks] = useState<
    IProjectGutenbergBook[]
  >([]);

  useEffect(() => {
    getAndSetFavorites(
      setFavouriteBooksTitles,
      STOARGE_KEY.FAVOURITE_PROJECT_GUTENBERG,
    );
  }, [isFocused]);

  useEffect(() => {
    bookTitle && setLiked(favouriteBooksTitles.includes(bookTitle));
  }, [favouriteBooksTitles, isLikedProjectGutenberg, bookTitle]);

  useEffect(() => {
    if (books && favouriteBooksTitles) {
      const favBooks: IProjectGutenbergBook[] = [];
      favouriteBooksTitles.forEach(title => {
        const favourites = books.find(book => book.title === title);
        if (favourites) {
          favBooks.push(favourites);
        }
      });
      setFavouriteBooks(favBooks);
    }
  }, [favouriteBooksTitles, books]);

  const handleLikeProjectGutenberg = async (): Promise<void> => {
    bookTitle &&
      toggleLike(
        STOARGE_KEY.FAVOURITE_PROJECT_GUTENBERG,
        isLikedProjectGutenberg,
        bookTitle,
        setFavouriteBooksTitles,
      );
  };

  return {
    favouriteBooksProjectGutenberg,
    isLikedProjectGutenberg,
    handleLikeProjectGutenberg,
  };
};
