import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    background: theme.palette.primary.dark,
  },
  toolbar: {
    display: 'grid',
    margin: '0 10px',
    justifyContent: 'space-between',
    gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
  },
  iconBlock: {
    maxWidth: '140px',
    justifyContent: 'center',
    display: 'flex',
    '& *': {
      height: 'fitContent',
      alignSelf: 'center',
      justifySekf: 'center',
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
