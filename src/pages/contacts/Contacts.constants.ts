export const CONTACTS_URI =
  'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

export const PROXY_URI = 'https://cors-anywhere.herokuapp.com/';

export const ERROR_MESSAGE =
  'We could not retrieve the data, please try again later';

export const FIRST_PAGE = 1;
export const NO_DATA_LENGTH = 0;
export const CONTACTS_ON_PAGE = 10;
export const LOADER_SIZE = 100;

export interface FetchedData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  isChecked: boolean;
}
