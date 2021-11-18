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
    padding: '0 !important',
  },
}));

export default useStyles;
