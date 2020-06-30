import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: '1em',
    height: '10vh',
    background:
      'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(219,45,253,1) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Header: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant='h2'>{'Contacts'}</Typography>
    </Box>
  );
};

export default Header;
