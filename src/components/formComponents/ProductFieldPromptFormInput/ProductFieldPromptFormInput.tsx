import { Path } from 'react-hook-form';
import { TextField } from '@mui/material';
import { TPromptField, TProductFieldPromptFormInputProps } from './types';
import { FIELD_PROMPT_MAX_LENGTH } from 'config';

const ProductFieldPromptFormInput = <T extends TPromptField>({
  errors,
  register,
  size = 'small',
  ...restProps
}: TProductFieldPromptFormInputProps<T>) => {
  // ! variables
  const errorMessage =
    typeof errors.prompt?.message === 'string'
      ? errors.prompt?.message
      : undefined;

  // ! render
  return (
    <TextField
      label='Prompt'
      multiline
      size={size}
      {...register('prompt' as Path<T>, {
        required: 'Prompt is required',
        maxLength: {
          value: FIELD_PROMPT_MAX_LENGTH,
          message: `Max ${FIELD_PROMPT_MAX_LENGTH} characters`,
        },
      })}
      error={!!errors.prompt}
      helperText={errorMessage}
      {...restProps}
    />
  );
};

export default ProductFieldPromptFormInput;
