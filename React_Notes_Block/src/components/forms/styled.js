/* eslint-disable no-unused-vars */
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
import Grid from '@mui/material/Grid';
import appTheme from '../../globalStyles';

const SignContainer = styled(
  Container,
  appTheme
)({
  maxWidth: '420px',
  margin: '0 auto',
  paddingBottom: '15px',
});
export default SignContainer;

const SignBox = styled(
  Box,
  appTheme
)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const FormBox = styled(
  Box,
  appTheme
)({
  background: appTheme.palette.primary.light,
  width: '100%',
});

const FormGrid = styled(
  Grid,
  appTheme
)({
  width: '100%',
});

const FormButton = styled(
  ButtonUnstyled,
  appTheme
)({
  backgroundColor: appTheme.palette.secondary.main,
  width: '50%',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  color: appTheme.palette.primary.light,
  fontWeight: '400',
  transition: 'all 200ms ease',
  cursor: 'pointer',
  boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)',
  border: 'none',
  marginTop: '15px',
  margin: '0 auto',
  '&:hover': {
    backgroundColor: appTheme.palette.secondary.light,
  },
});

export { SignContainer, SignBox, FormBox, FormGrid, FormButton };
