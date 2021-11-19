import { styled } from '@mui/styles';
import { Typography, Grid, Box, Container } from '@material-ui/core';
import appTheme from '../../globalStyles';

const GridShared = styled(
  Grid,
  appTheme
)({
  marginTop: '15px',
  '& h5': {
    textAlign: 'center',
  },
});
export default GridShared;

export const MainSharedCont = styled(
  Container,
  appTheme
)({
  minHeight: '100vh',
  background: appTheme.palette.primary.main,
});

export const NoteText = styled(
  Box,
  appTheme
)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  margin: '0',
  alignSelf: 'center',
  gridTemplateColumns: 'auto auto auto',
  justifyContent: 'start',
  borderRadius: '7px',
  border: `1px solid ${appTheme.palette.primary.dark}`,
});

export const Title = styled(
  Typography,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  width: 'fitContent',
  margin: '0',
  color: appTheme.palette.secondary.light,
  msJustifySelf: 'start',
});

export const Description = styled(
  Typography,
  appTheme
)({
  maxHeight: 'fitContent',
  color: appTheme.palette.secondary.dark,
  fontWeight: '600',
  width: 'fitContent',
  textAlign: 'justify',
});

export const ShareDate = styled(
  Typography,
  appTheme
)({
  color: appTheme.palette.secondary.light,
});

export const NoSharedNotes = styled(
  Container,
  appTheme
)({
  paddingTop: '15px',
  position: 'relative',
  minHeight: '100vh',
});
