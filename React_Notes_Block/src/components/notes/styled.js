import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

export { ChangeInputShow, ChangeInputHide, TextAr };
