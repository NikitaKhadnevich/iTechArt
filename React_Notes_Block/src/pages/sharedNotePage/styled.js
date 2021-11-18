import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridNotes: {
    marginTop: '15px',
    '& h6': {
      textAlign: 'center',
    },
  },

  listItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    boxSizing: 'border-box',
    borderRadius: '7px',
    background: theme.palette.primary.main,
    outline: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 0px 15px 3px ${theme.palette.primary.main}`,
    animation: 'appearance-key 5s ease-in',
  },

  listItemActive: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 'fitContent',
    boxSizing: 'border-box',
    borderRadius: '7px',
    background: theme.palette.primary.light,
    outline: `2px solid ${theme.palette.primary.dark}`,
    boxShadow: `0px 0px 10px 5px ${theme.palette.primary.dark}`,
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

  changeInputHide: {
    display: 'none',
  },

  changeInputShow: {
    height: '100%',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginLeft: '0px !important',
  },

  textAr: {
    width: '100%',
  },
}));

export default useStyles;
