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
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 'fitContent',
  boxSizing: 'border-box',
  borderRadius: '7px',
  background: appTheme.palette.primary.light,
  outline: `2px solid ${appTheme.palette.primary.dark}`,
  boxShadow: `0px 0px 10px 5px ${appTheme.palette.primary.dark}`,
});

export const ListNoActive = styled(
  List,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '140px',
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
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0',
  alignSelf: 'center',
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
});

export const Description = styled(
  Typography,
  appTheme
)({
  maxHeight: '20px',
  overflow: 'hidden',
  display: 'block',
  color: appTheme.palette.primary.dark,
});

export const NoteActions = styled(
  Stack,
  appTheme
)({
  width: '100%',
  maxHeight: 'fitContent',
  margin: 0,
  marginTop: '5px',
  background: appTheme.palette.primary.light,
  display: 'flex',
});

export const NoAddedNotes = styled(
  Container,
  appTheme
)({
  position: 'relative',
  minHeight: '100vh',
});
