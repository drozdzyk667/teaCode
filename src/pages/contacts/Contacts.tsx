import React from 'react';
import Loader from '../../components/loader';
import Header from '../../components/header';
import useFetch from '../../helpers/useFetch';
import { CONTACTS_URI } from './Contacts.constants';
import InfoDialog from '../../components/infoDialog';
import ContactListContainer from './ContactListContainer';
import { FetchedData } from '../../pages/contacts/Contacts.constants';
import {
  ERROR_MESSAGE,
  LOADER_SIZE
} from '../../pages/contacts/Contacts.constants';

const Contacts = () => {
  const { response, error, isLoading } = useFetch(CONTACTS_URI);

  if (error) return <InfoDialog message={`${ERROR_MESSAGE}: ${error}`} />;

  const extendedResponse: FetchedData[] = Object.values(
    response
      .sort((a, b) => {
        return a.last_name.localeCompare(b.last_name);
      })
      .reduce(
        (acc, item) =>
          Object.assign(acc, {
            [item.last_name]: { ...item, isChecked: false }
          }),
        {}
      )
  );

  return (
    <>
      <Header />
      <Loader isLoading={isLoading} size={LOADER_SIZE}>
        <ContactListContainer response={extendedResponse} />
      </Loader>
    </>
  );
};

export default Contacts;
