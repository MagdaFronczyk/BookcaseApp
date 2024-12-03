//types
import {
  COMMON_ERROR_REPONSE,
  ICommonResponseWithoutTotal,
  INYTBook,
  INYTResposne,
} from '../types';
import {status} from '../types/enums';
//api
import {NYT_API_AXIOS_INSTANCE, X_API_KEY_NYT} from './Index';

export const getNYThardcoverFictionBestsellers = (
  setResponse: React.Dispatch<
    React.SetStateAction<ICommonResponseWithoutTotal<INYTBook[] | null>>
  >,
  abortController: AbortController,
): void => {
  NYT_API_AXIOS_INSTANCE.get<INYTResposne>(
    `/lists/current/hardcover-fiction.json?api-key=${X_API_KEY_NYT}`,
    {signal: abortController.signal},
  )
    .then(response => {
      setResponse({
        status: status.RESOLVED,
        data: response.data.results.books,
      });
    })
    .catch(error => {
      setResponse(COMMON_ERROR_REPONSE);
      if (error.response) {
        // When response status code is out of 2xx range
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // When no response was received after request was made
        // console.log(error.request);
      } else {
        // console.log(error.message);
      }
    });
};
