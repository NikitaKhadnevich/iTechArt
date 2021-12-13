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
  gap: '5px',
  '& h6': {
    margin: '5px 20px',
  },
  '& *': {
    transition: '.5s',
  },
});

export const NavLink = styled(
  Link,
  appTheme
)({
  textDecoration: 'none',
  color: appTheme.palette.secondary.dark,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:hover': {
    background: appTheme.palette.primary.light,
    borderRadius: '20px',
    transition: '.5s',
  },
});

export const UserBox = styled(
  Box,
  appTheme
)({
  minWidth: 'fit-content',
  textDecoration: 'none',
  color: appTheme.palette.secondary.dark,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: appTheme.palette.primary.dark,
  '& p': {
    textAlign: 'center',
    margin: '3px 5px',
  },
  '& a': {
    background: 'none',
    borderBottom: `1px solid ${appTheme.palette.secondary.main}`,
    transition: '.3s',
  },
  '& a:hover': {
    borderBottom: `1px solid ${appTheme.palette.primary.light}`,
    transition: '.3s',
  },
});

export const SignBox = styled(
  Box,
  appTheme
)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  '& p': {
    margin: '5px 15px',
  },
  '& a': {
    background: 'none',
    borderBottom: `1px solid ${appTheme.palette.secondary.main}`,
    transition: '.3s',
  },
  '& a:hover': {
    borderBottom: `1px solid ${appTheme.palette.primary.light}`,
    transition: '.3s',
  },
});
