import { styled } from '@mui/styles';
import { Container } from '@material-ui/core';
import appTheme from '../../globalStyles';

const MainWrapper = styled(
  Container,
  appTheme
)({
  minHeight: '100vh',
  background: appTheme.palette.primary.main,
});
export default MainWrapper;

export const AboutDesc = styled(
  Container,
  appTheme
)({
  paddingTop: '30px',
});
