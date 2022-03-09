import React from 'react';
import PropTypes from 'prop-types';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import appTheme from '../../../globalStyles';
import { UsersList } from '../styled';

const GetUsers = ({ userId, userList, handleChangeUser }) => (
  <FormControl
    sx={{ m: 1, width: '100%', margin: '0px' }}
    component='fieldset'
    variant='standard'
  >
    <RadioGroup value={userId} onChange={handleChangeUser}>
      <UsersList component='div' disablePadding>
        {userList &&
          userList.map((user) => (
            <FormControlLabel
              value={user.id}
              sx={{ margin: '0px' }}
              control={
                <Radio
                  sx={{
                    color: appTheme.palette.primary.dark,
                    '&.Mui-checked': {
                      color: appTheme.palette.secondary.main,
                    },
                  }}
                />
              }
              label={`Share to ${user.email}`}
            />
          ))}
      </UsersList>
    </RadioGroup>
  </FormControl>
);

export default GetUsers;

GetUsers.propTypes = {
  userId: PropTypes.number,
  userList: PropTypes.string,
  handleChangeUser: PropTypes.func,
};

GetUsers.defaultProps = {
  userId: 'userId',
  userList: 'userList',
  handleChangeUser: 'handleChangeUser',
};
