//types
import {COMMON_ERROR_REPONSE, ICommonResponseWithoutTotal} from '../../types';
import {status} from '../../types/enums';
import {
  IWolneLekturyBook,
  IWolneLekturyResponse,
} from '../../types/wolneLektury';
//api
import {WOLNE_LEKTURY_API_AXIOS_INSTANCE} from '../Index';

export const getWolneLekturyBooks = (
  setResponse: React.Dispatch<
    React.SetStateAction<
      ICommonResponseWithoutTotal<IWolneLekturyBook[] | null>
    >
  >,
  abortController: AbortController,
): void => {
  WOLNE_LEKTURY_API_AXIOS_INSTANCE.get<IWolneLekturyResponse>(`/books`, {
    signal: abortController.signal,
  })
    .then(response => {
      setResponse({
        status: status.RESOLVED,
        data: response.data,
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
