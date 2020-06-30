import React from 'react';
import Contact from './Contact';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Pagination from '@material-ui/lab/Pagination';
import { FetchedData } from '../../pages/contacts/Contacts.constants';
import {
  NO_DATA_LENGTH,
  FIRST_PAGE
} from '../../pages/contacts/Contacts.constants';

const useStyles = makeStyles({
  container: {
    padding: '2em',
    backgroundColor: '#fAf',
    minHeight: '65vh'
  },
  pagination: {
    margin: '2em',
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

interface ContactListProps {
  matchedData: FetchedData[];
  contactList: FetchedData[];
  maxPage: number;
  currentPage: number;
  jumpToPage: (_event: unknown, page: number) => void;
  handleCheckContact: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  jumpToPage,
  maxPage,
  matchedData,
  currentPage,
  contactList,
  handleCheckContact
}) => {
  const classes = useStyles();

  const showButton = matchedData.length !== NO_DATA_LENGTH;
  const hideButton = matchedData.length === NO_DATA_LENGTH;

  return (
    <>
      <Box className={classes.container}>
        {contactList.map(contact => (
          <Contact
            key={contact.id}
            handleCheckContact={handleCheckContact}
            contact={contact}
          />
        ))}
      </Box>
      <Box className={classes.pagination}>
        <Pagination
          size='small'
          color='primary'
          count={maxPage}
          page={currentPage}
          defaultPage={FIRST_PAGE}
          onChange={jumpToPage}
          showFirstButton={showButton}
          showLastButton={showButton}
          hideNextButton={hideButton}
          hidePrevButton={hideButton}
        />
      </Box>
    </>
  );
};

export default ContactList;
