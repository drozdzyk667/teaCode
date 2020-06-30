import React from 'react';
import { FIRST_PAGE } from '../pages/contacts/Contacts.constants';

const usePagination = (data: any[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = React.useState(FIRST_PAGE);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - FIRST_PAGE) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };
  const jumpToPage = (_event: unknown, page: number) => {
    setCurrentPage(page);
  };

  return { jumpToPage, currentData, currentPage, maxPage };
};

export default usePagination;
