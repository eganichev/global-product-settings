import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';

export type TPromptField = { prompt: string };

type TextAreaProps = Omit<
  TextFieldProps,
  'multiline' | 'label' | 'error' | 'helperText'
>;

type ReactHookFormProps<T extends TPromptField> = {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

export type TProductFieldPromptFormInputProps<T extends TPromptField> =
  ReactHookFormProps<T> & TextAreaProps;
