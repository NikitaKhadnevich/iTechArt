import { styled } from '@mui/styles';
import { Typography, Grid, Box, Container } from '@material-ui/core';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import appTheme from '../../../globalStyles';

const GridMain = styled(
  Grid,
  appTheme
)({
  marginTop: '15px !important',
});
export default GridMain;

export const ListActive = styled(
  List,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'fit-content',
  boxSizing: 'border-box',
  borderRadius: '7px',
  background: appTheme.palette.primary.light,
  outline: `2px solid ${appTheme.palette.primary.dark}`,
  boxShadow: `0px 0px 10px 6px ${appTheme.palette.primary.dark}`,
});

export const ListNoActive = styled(
  List,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'fit-content',
  boxSizing: 'border-box',
  borderRadius: '7px',
  background: appTheme.palette.primary.main,
  outline: `2px solid ${appTheme.palette.primary.main}`,
  boxShadow: `0px 0px 15px 3px ${appTheme.palette.primary.main}`,
});

export const NoteText = styled(
  Box,
  appTheme
)({
  display: 'flex !important',
  flexDirection: 'column',
  width: '100% !important',
  margin: '0 !important',
  alignSelf: 'center !important',
  maxHeight: 'fit-content !importnat',
  overflow: 'auto',
  boxShadow: 'none',
  outline: 'none',
  background: `${appTheme.palette.primary.main} !important`,
});

export const Title = styled(
  Typography,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  margin: '0',
  textAlign: 'center',
  color: `${appTheme.palette.secondary.main} !important`,
});

export const Description = styled(
  Typography,
  appTheme
)({
  maxHeight: 'auto',
  overflow: 'hidden !important',
  display: 'block !important',
  color: `${appTheme.palette.primary.dark} !important`,
});

export const NoteActions = styled(
  Stack,
  appTheme
)({
  width: '100%',
  maxHeight: 'fit-content',
  margin: 0,
  marginTop: '5px',
  background: appTheme.palette.primary.light,
  display: 'flex',
});

export const BottonChange = styled(
  Box,
  appTheme
)({
  display: 'block',
  minHeight: '40px !important',
  justifyContent: 'start',
  position: 'static',
  margin: '0',
  width: 'fit-content',
  boxShadow: 'none',
  borderRadius: '0px',
  outline: 'none !important',
  zIndex: '0',
  textAlign: 'start',
  background: 'none',
});

export const NoAddedNotes = styled(
  Container,
  appTheme
)({
  position: 'relative',
  minHeight: '100vh',
});
