import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    background: theme.palette.primary.dark,
  },
  navigation: {
    marginLeft: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    border: '1px solid red',
  },
}));

export default useStyles;
