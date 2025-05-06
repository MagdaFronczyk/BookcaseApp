import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';

//types
import {IWolneLekturyBook} from '../../types';
//services
import {
  getAndSetFavorites,
  STOARGE_KEY,
  toggleLike,
} from '../../services/RNAsyncStorage';

export const useFavouriteProjectWolneLektury = (
  books: IWolneLekturyBook[] | null,
  bookTitle?: IWolneLekturyBook['title'],
) => {
  const isFocused = useIsFocused();
  const [favouriteBooksTitles, setFavouriteBooksTitles] = useState<string[]>(
    [],
  );
  const [isLikedWolneLektury, setLiked] = useState<boolean>(false);
  const [favouriteWolneLektury, setFavouriteBooks] = useState<
    IWolneLekturyBook[]
  >([]);

  useEffect(() => {
    getAndSetFavorites(
      setFavouriteBooksTitles,
      STOARGE_KEY.FAVOURITE_WOLNE_LEKTURY,
    );
  }, [isFocused]);

  useEffect(() => {
    bookTitle && setLiked(favouriteBooksTitles.includes(bookTitle));
  }, [favouriteBooksTitles, isLikedWolneLektury, bookTitle]);

  useEffect(() => {
    if (books && favouriteBooksTitles) {
      const favBooks: IWolneLekturyBook[] = [];
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
        STOARGE_KEY.FAVOURITE_WOLNE_LEKTURY,
        isLikedWolneLektury,
        bookTitle,
        setFavouriteBooksTitles,
      );
  };

  return {
    favouriteWolneLektury,
    isLikedWolneLektury,
    handleLikeWolneLektury,
  };
};
