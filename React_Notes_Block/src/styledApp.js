import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    minHeight: '100vh',
    margin: '5px',
    maxWidth: '100% !important',
    padding: '0 !important',
    boxSizing: 'border-box',
    boxShadow: `0px 0px 10px ${theme.palette.primary.dark}`,
  },
}));

export default useStyles;
