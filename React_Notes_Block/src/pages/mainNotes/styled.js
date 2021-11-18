import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    minHeight: '100vh',
    margin: '5px',
    boxSizing: 'border-box',
    boxShadow: `0px 0px 10px ${theme.palette.primary.dark}`,
  },
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
  spiner: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '25px',
    width: '100%',
    height: '100vh',
  },
  spinerAbout: {
    marginTop: '10px',
    textAlign: 'center',
    background: theme.palette.primary.dark,
    fontSize: '25px',
    width: '100%',
    height: '100px',
  },
}));

export default useStyles;
