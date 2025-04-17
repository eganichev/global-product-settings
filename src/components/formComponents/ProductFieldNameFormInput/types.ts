import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

export type TNameField = { name: string };

type NameTextInputProps = Omit<
  TextFieldProps,
  'multiline' | 'label' | 'error' | 'helperText'
>;

type ReactHookFormProps<T extends TNameField> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

type CustomProps = {
  backgroundFill?: string;
};

export type TProductFieldNameFormInputProps<T extends TNameField> =
  ReactHookFormProps<T> & NameTextInputProps & CustomProps;
