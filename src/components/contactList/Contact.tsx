import React from 'react';
import {
  Box,
  Grid,
  Avatar,
  Typography,
  Divider,
  Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FetchedData } from '../../pages/contacts/Contacts.constants';

const useStyles = makeStyles({
  root: {
    margin: '1.5em 0 1.5em 0'
  },
  spacer: {
    margin: '0 10px 0 20px'
  },
  gridContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  checkbox: {
    marginLeft: 'auto'
  }
});

interface ContactProps {
  contact: FetchedData & { isChecked: boolean };
  handleCheckContact: (id: string) => void;
}

const Contact: React.FC<ContactProps> = ({ handleCheckContact, contact }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid
          className={classes.gridContainer}
          container
          justify='flex-start'
          spacing={4}
        >
          <Avatar alt={contact.first_name} src={contact.avatar} />
          <Typography
            className={classes.spacer}
          >{`${contact.first_name} ${contact.last_name}`}</Typography>
          <Checkbox
            className={classes.checkbox}
            color='primary'
            checked={contact.isChecked}
            onChange={() => handleCheckContact(contact.id)}
          />
        </Grid>
      </Box>
      <Divider />
    </>
  );
};

export default Contact;
