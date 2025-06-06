import {status} from './enums';
export type * from './newYorkTimes';
export type * from './wolneLektury';
export type * from './projectGutenberg';
export type * from './calendar';
export type * from './navigation';
export type * from './projectGutenberg';
export type * from './panel';
export type * from './permissions';
export type * from './toasts';
export type * from './lists';

export interface ICommonResponse<dataType> {
  status: status;
  data: dataType;
  total: number;
}

export interface ICommonResponseWithoutTotal<dataType> {
  status: status;
  data: dataType;
}

export const COMMON_INIT_RESPONSE: Omit<ICommonResponse<null>, 'total'> = {
  status: status.PENDING,
  data: null,
};

export const COMMON_INIT_RESPONSE_WITH_TOTAL: ICommonResponse<null> = {
  ...COMMON_INIT_RESPONSE,
  total: 0,
};

export const COMMON_ERROR_REPONSE: Omit<ICommonResponse<null>, 'total'> = {
  status: status.REJECTED,
  data: null,
};

export const COMMON_ERROR_REPONSE_WITH_TOTAL: ICommonResponse<null> = {
  ...COMMON_ERROR_REPONSE,
  total: 0,
};
