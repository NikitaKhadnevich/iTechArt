import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  changeInputHide: {
    display: 'flex',
    maxHeight: '45px',
  },
  changeInputShow: {
    height: '100%',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginLeft: '-30px !important',
  },
  textAr: {
    width: '100%',
  },
}));

export default useStyles;
