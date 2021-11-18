import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '100vh',
    background: theme.palette.primary.main,
  },
  aboutDesc: {
    paddingTop: '30px',
  },
}));

export default useStyles;
