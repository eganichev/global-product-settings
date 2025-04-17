import { TextFieldProps } from '@mui/material';

export type ICommonTextFieldProps = TextFieldProps & {
  maxLength?: number;
  backgroundFill?: string;
};
