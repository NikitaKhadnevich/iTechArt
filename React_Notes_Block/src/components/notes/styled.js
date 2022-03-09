/* eslint-disable no-unused-vars */
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Button } from '@material-ui/core';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import ListItem from '@mui/material/ListItem';
import appTheme from '../../globalStyles';

const ChangeInputShow = styled(
  Box,
  appTheme
)({
  height: '100%',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between !important',
  marginLeft: '-30px !important important',
});

const ChangeInputHide = styled(
  Box,
  appTheme
)({
  display: 'block',
  maxHeight: '45px',
});

const TextAr = styled(
  TextField,
  appTheme
)({
  width: '100%',
});

const NotesStat = styled(
  Container,
  appTheme
)({
  position: 'relative',
  minHeight: 'fit-content',
  marginBottom: '50px',
  textAlign: 'center',
});

const UsersList = styled(
  ListItem,
  appTheme
)({
  maxWidth: '100%',
  display: 'flex !important',
  flexDirection: 'column',
  overflow: 'scroll',
  maxHeight: '100px',
  borderRadius: '10px',
  boxShadow: `0px 0px 5px 3px ${appTheme.palette.primary.main}`,
});

const AddButton = styled(
  Button,
  appTheme
)({
  backgroundColor: appTheme.palette.primary.dark,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  fontWeight: '400',
  transition: 'all 200ms ease',
  cursor: 'pointer',
  boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)',
  border: 'none',
  margin: '0 auto',
  '& .MuiButton-label': {
    color: appTheme.palette.primary.light,
  },
  '&:hover': {
    backgroundColor: appTheme.palette.secondary.light,
    color: appTheme.palette.secondary.dark,
  },
});

export {
  ChangeInputShow,
  ChangeInputHide,
  TextAr,
  NotesStat,
  UsersList,
  AddButton,
};
