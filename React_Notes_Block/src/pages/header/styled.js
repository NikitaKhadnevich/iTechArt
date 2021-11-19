import { styled } from '@mui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import appTheme from '../../globalStyles';

const HeaderNav = styled(
  AppBar,
  appTheme
)({
  position: 'relative !important',
  background: `${appTheme.palette.primary.dark} !important`,
  margin: '5px 0px !important',
});
export default HeaderNav;

export const ToolbarNav = styled(
  Toolbar,
  appTheme
)({
  display: 'flex',
  margin: '5px 0px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  padding: '0 !important',
});
