import * as React from 'react';
import { makeStyles, Grid, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '50vh'
  }
});

interface Props {
  isLoading: boolean;
  size: number | string;
}

const Loader: React.FC<Props> = ({ isLoading, size, children }) => {
  const classes = useStyles();

  const content = isLoading ? (
    <Grid
      className={classes.root}
      container={true}
      alignItems='center'
      justify='center'
    >
      <CircularProgress size={size} />
    </Grid>
  ) : (
    children
  );

  return <div className={classes.root}>{content}</div>;
};

export default Loader;
