import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutWrapper: {
    minwidth: '100%',
    minHeight: '100px',
    height: 'fitContent',
    top: '15px',
    position: 'sticky',
    background: theme.palette.primary.main,
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: `0px 0px 10px 5px ${theme.palette.primary.dark}`,
    fontSize: '15px',
    borderRadius: '7px',
  },
}));

export default useStyles;
