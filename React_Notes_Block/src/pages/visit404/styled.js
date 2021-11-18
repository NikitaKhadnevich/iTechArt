import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  visit404: {
    position: 'relative',
    background: theme.palette.primary.main,
    height: '100vh',
    '& h3': {
      paddingTop: '40px !important',
    },
  },
}));

export default useStyles;
