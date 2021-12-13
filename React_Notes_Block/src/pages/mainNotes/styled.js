import { styled } from '@mui/styles';
import { Container } from '@material-ui/core';
import appTheme from '../../globalStyles';

const MainNoteWrapper = styled(
  Container,
  appTheme
)({
  boxSizing: 'border-box',
  margin: '0 auto',
  padding: '0 5px !important',
  marginTop: '10px',
  maxWidth: '100% !important',
  display: 'flex',
  height: 'fit-content',
  flexDirection: 'column',
});

export default MainNoteWrapper;
