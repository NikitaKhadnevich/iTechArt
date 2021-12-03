import { styled } from '@mui/styles';

import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import appTheme from '../../../globalStyles';

const SelectSort = styled(
  Select,
  appTheme
)({
  height: '50px',
});

const FormControlWrapper = styled(
  FormControl,
  appTheme
)({
  width: '100%',
});

const InputLabelName = styled(
  InputLabel,
  appTheme
)({
  width: '100%',
});

export { SelectSort, FormControlWrapper, InputLabelName };
