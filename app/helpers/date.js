import moment from 'moment';

/* eslint import/prefer-default-export: 0 */
export const formatDate = (date) => {
  try {
    return moment(date).format('DD.MM.YYYY HH:mm');
  } catch (e) {
    return '';
  }
};
