import { styled } from '@mui/styles';
import { Container } from '@material-ui/core';
import appTheme from '../../globalStyles';

const MainContainer = styled(
  Container,
  appTheme
)({
  minHeight: '100vh',
  background: appTheme.palette.primary.main,
});
export default MainContainer;

export const AboutDesc = styled(
  Container,
  appTheme
)({
  paddingTop: '30px',
});
