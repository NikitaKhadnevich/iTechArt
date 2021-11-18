import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    background: theme.palette.primary.dark,
  },
  toolbar: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  iconBlock: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItem: 'center',
    display: 'flex',
    margin: '0 20px',

    '& *': {
      height: 'fitContent',
      alignSelf: 'center',
      justifySelf: 'center',
      fontWeight: '400',
    },
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& h6': {
      margin: '5px 10px',
    },
    '& *': {
      transition: '.5s',
    },
    '& *:hover': {
      background: theme.palette.primary.main,
      borderRadius: '20px',
      transition: '.5s',
    },
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
  },
}));

export default useStyles;