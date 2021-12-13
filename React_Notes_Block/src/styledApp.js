import { styled } from '@mui/styles';
import { Container } from '@material-ui/core';
import appTheme from './globalStyles';

const AppWrapper = styled(
  Container,
  appTheme
)({
  minHeight: '100vh',
  margin: '5px',
  maxWidth: '100% !important',
  padding: '0 10px !important',
  boxSizing: 'border-box',
  boxShadow: `0px 0px 10px ${appTheme.palette.primary.dark}`,
});

export default AppWrapper;
