import React from 'react';
import { Box } from '@material-ui/core';
import Search from '../../components/contactSearch';
import { makeStyles } from '@material-ui/styles';
import ContactList from '../../components/contactList';
import usePagination from '../../helpers/usePagination';
import {
  CONTACTS_ON_PAGE,
  FIRST_PAGE,
  FetchedData
} from './Contacts.constants';

const useStyles = makeStyles({
  root: {
    margin: '1em'
  }
});

const ContactListContainer = ({ response }) => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = React.useState<string>('');
  const [matchedData, setMatchedData] = React.useState<FetchedData[]>(response);
  const checkedContacts = matchedData.filter(contact => contact.isChecked);

  const getFilteredContacts = () => {
    if (!filterValue) {
      return matchedData;
    }
    return matchedData.filter(
      data =>
        data?.last_name.toLowerCase().match(filterValue.toLowerCase()) ||
        data?.first_name.toLowerCase().match(filterValue.toLowerCase())
    );
  };

  const { currentData, jumpToPage, maxPage, currentPage } = usePagination(
    getFilteredContacts(),
    CONTACTS_ON_PAGE
  );

  const handleFilterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    jumpToPage(null, FIRST_PAGE);
    setFilterValue(event.target.value);
  };

  const handleCheckContact = (id: string) => {
    setMatchedData(
      matchedData.map(item =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  React.useEffect(() => {
    if (checkedContacts.length) {
      console.log(checkedContacts);
    }
  }, [checkedContacts]);

  const contactsProps = {
    matchedData,
    jumpToPage,
    maxPage,
    currentPage,
    contactList: currentData(),
    handleCheckContact
  };

  return (
    <Box className={classes.root}>
      <Search handleFilterInput={handleFilterInput} />
      <ContactList {...contactsProps} />
    </Box>
  );
};

export default ContactListContainer;
