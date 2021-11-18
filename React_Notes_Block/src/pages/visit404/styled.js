import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '100vh',
    background: theme.palette.primary.main,
  },
  visit404: {
    position: 'relative',
    background: theme.palette.primary.main,
    height: '100vh',
    '& h5': {
      paddingTop: '40px !important',
    },
  },
}));

export default useStyles;
