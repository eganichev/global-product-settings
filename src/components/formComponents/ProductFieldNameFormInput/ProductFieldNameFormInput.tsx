import { Path } from 'react-hook-form';
import { FIELD_NAME_MAX_LENGTH } from 'config';
import { TNameField, TProductFieldNameFormInputProps } from './types';
import { InputProps, TextField, TextFieldProps } from '@mui/material';
import { useMemo } from 'react';

// TODO remove CommonTextField and move to this form input
const ProductFieldNameFormInput = <T extends TNameField>({
  register,
  errors,
  size = 'small',
  slotProps,
  backgroundFill,
}: TProductFieldNameFormInputProps<T>) => {
  // ! memos
  const mergedInputSlotProps = useMemo<TextFieldProps['slotProps']>(() => {
    const safeSlotProps = slotProps ?? {};
    const inputSlotProps = (safeSlotProps?.input ?? {}) as InputProps;
    const inputStyleSlotProps = inputSlotProps?.style ?? {};

    return {
      ...safeSlotProps,
      input: {
        ...inputSlotProps,
        style: {
          ...inputStyleSlotProps,
          backgroundColor: backgroundFill,
        },
      },
    };
  }, [slotProps, backgroundFill]);

  // ! variables
  const errorMessage =
    typeof errors.name?.message === 'string' ? errors.name.message : undefined;

  // ! render
  return (
    <TextField
      label='Field Name'
      size={size}
      slotProps={mergedInputSlotProps}
      {...register('name' as Path<T>, {
        required: 'Field name is required',
        maxLength: {
          value: FIELD_NAME_MAX_LENGTH,
          message: `Max ${FIELD_NAME_MAX_LENGTH} characters`,
        },
      })}
      error={!!errors.name}
      helperText={errorMessage}
    />
  );
};

export default ProductFieldNameFormInput;
