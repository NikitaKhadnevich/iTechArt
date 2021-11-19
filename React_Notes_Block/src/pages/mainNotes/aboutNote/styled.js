import { styled } from '@mui/styles';
import { Container } from '@material-ui/core';
import appTheme from '../../../globalStyles';

const AboutWrapperDesc = styled(
  Container,
  appTheme
)({
  minwidth: '100%',
  height: 'fitContent',
  top: '10px',
  position: 'sticky',
  background: appTheme.palette.primary.main,
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: `0px 0px 10px 5px ${appTheme.palette.primary.dark}`,
  borderRadius: '7px',
  '& p': {
    fontSize: '14px',
    padding: '10px',
    textAlign: 'center',
  },
});
export default AboutWrapperDesc;
