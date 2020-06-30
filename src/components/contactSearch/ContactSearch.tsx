import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '1em 0 1em 0'
  }
});

interface Props {
  handleFilterInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactSearch: React.FC<Props> = ({ handleFilterInput }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField
        onChange={handleFilterInput}
        label='Search Input'
        variant='outlined'
      />
    </Box>
  );
};

export default ContactSearch;
