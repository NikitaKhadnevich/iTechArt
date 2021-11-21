import { styled } from '@mui/styles';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import appTheme from '../../globalStyles';

const IconBlock = styled(
  Box,
  appTheme
)({
  maxWidth: '140px',
  justifyContent: 'center',
  display: 'flex',
  minHeight: '0px !important',
  '& *': {
    height: 'fitContent',
    alignSelf: 'center',
    justifySekf: 'center',
    fontWeight: '400',
  },
});
export default IconBlock;

export const Navigation = styled(
  Box,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& h6': {
    margin: '5px 10px',
  },
  '& *': {
    transition: '.5s',
  },
  '& *:hover': {
    background: appTheme.palette.primary.light,
    borderRadius: '20px',
    transition: '.5s',
  },
});

export const NavLink = styled(
  Link,
  appTheme
)({
  textDecoration: 'none',
  color: appTheme.palette.secondary.dark,
});
