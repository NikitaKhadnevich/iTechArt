import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridNotes: {
    marginTop: '15px',
    '& h5': {
      textAlign: 'center',
    },
  },
  mainContainer: {
    minHeight: '100vh',
    background: theme.palette.primary.main,
  },
  noteText: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    margin: '0',
    alignSelf: 'center',
    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'start',
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    width: 'fitContent',
    margin: '0',
    color: theme.palette.secondary.light,
    msJustifySelf: 'start',
  },
  description: {
    maxHeight: 'fitContent',
    color: theme.palette.secondary.dark,
    fontWeight: '600',
    width: 'fitContent',
    textAlign: 'justify',
  },
  shareDate: {
    color: theme.palette.secondary.light,
  },
  noteActions: {
    width: '100%',
    margin: 0,
    marginTop: '5px',
    background: theme.palette.primary.light,
    display: 'flex',
  },
  textAr: {
    width: '100%',
  },
  noSharedNotes: {
    position: 'relative',
    minHeight: '100vh',
  },
}));

export default useStyles;
