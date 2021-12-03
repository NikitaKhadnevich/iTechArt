import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@material-ui/core/Button';
import appTheme from '../../../globalStyles';

const FormAddBox = styled(
  Box,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '15px',
  height: '100%',
});

const FormAddGrid = styled(
  Grid,
  appTheme
)({
  width: '100%',
});

const GridButton = styled(
  Grid,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
});

const AddButton = styled(
  Button,
  appTheme
)({
  backgroundColor: appTheme.palette.primary.dark,
  width: '100%',
  height: '50px',
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

export { FormAddBox, FormAddGrid, GridButton, AddButton };
