import { __mock__ } from '../__mock__';

export const getBooks = () => {
  return Promise.resolve(__mock__);
};
