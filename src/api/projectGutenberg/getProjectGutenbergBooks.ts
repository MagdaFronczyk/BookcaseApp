//types
import {COMMON_ERROR_REPONSE, ICommonResponseWithoutTotal} from '../../types';
import {status} from '../../types/enums';
import {
  IProjectGutenbergBook,
  IProjectGutenbergResponse,
} from '../../types/index';
//api
import {PROJECT_GUTENBERG_API_AXIOS_INSTANCE} from '../Index';

export const getProjectGutenbergBooks = (
  setResponse: React.Dispatch<
    React.SetStateAction<
      ICommonResponseWithoutTotal<IProjectGutenbergBook[] | null>
    >
  >,
  abortController: AbortController,
): void => {
  PROJECT_GUTENBERG_API_AXIOS_INSTANCE.get<IProjectGutenbergResponse>(
    `/books`,
    {
      signal: abortController.signal,
    },
  )
    .then(response => {
      setResponse({
        status: status.RESOLVED,
        data: response.data.results,
      });
    })
    .catch(error => {
      setResponse(COMMON_ERROR_REPONSE);
      console.warn(error);
      if (error.response) {
        // When response status code is out of 2xx range
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // When no response was received after request was made
        console.log(error.request);
      } else {
        console.log(error.message);
      }
    });
};
