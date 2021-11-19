import { styled } from '@mui/styles';
import { Container } from '@material-ui/core';
import appTheme from '../../globalStyles';

const Visit404Main = styled(
  Container,
  appTheme
)({
  position: 'relative',
  background: appTheme.palette.primary.main,
  height: '100vh',
  '& h5': {
    paddingTop: '40px !important',
  },
});
export default Visit404Main;

export const Visit404Text = styled(
  Container,
  appTheme
)({
  position: 'relative',
  background: appTheme.palette.primary.main,
  height: '100vh',
  '& h5': {
    paddingTop: '40px !important',
  },
});
