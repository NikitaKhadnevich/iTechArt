import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridNotes: {
    marginTop: '15px',
  },

  listItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '140px',
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
    width: '100%',
    margin: '0',
    alignSelf: 'center',
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '0',
    textAlign: 'center',
  },

  description: {
    maxHeight: '20px',
    overflow: 'hidden',
    display: 'block',
    color: theme.palette.primary.dark,
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
  },

  textAr: {
    width: '100%',
  },
}));

export default useStyles;
