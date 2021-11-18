import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: '0 5px !important',
    marginTop: '10px',
    maxWidth: '100% !important',
    display: 'flex',
    height: 'fit-content',
    flexDirection: 'column',
  },
}));

export default useStyles;
