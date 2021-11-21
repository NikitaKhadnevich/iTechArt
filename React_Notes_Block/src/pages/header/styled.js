import { styled } from '@mui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import appTheme from '../../globalStyles';

const HeaderNav = styled(
  AppBar,
  appTheme
)({
  minHeight: '0px !important',
  maxHeight: 'fit-content !important',
  position: 'relative !important',
  background: `${appTheme.palette.primary.dark} !important`,
  margin: '5px 0px',
});
export default HeaderNav;

export const ToolbarNav = styled(
  Toolbar,
  appTheme
)({
  display: 'flex',
  margin: '5px 0px',
  justifyContent: 'center !important',
  flexWrap: 'wrap',
  gap: '1rem',
  padding: '0',
});
