import { FC, useMemo } from 'react';
import { ICommonTextFieldProps } from './types';
import { InputProps, TextField, TextFieldProps } from '@mui/material';

const CommonTextField: FC<ICommonTextFieldProps> = ({
  maxLength,
  backgroundFill,
  slotProps,
  ...restProps
}) => {
  // ! memos
  const mergedInputSlotProps = useMemo<TextFieldProps['slotProps']>(() => {
    const safeSlotProps = slotProps ?? {};
    const htmlInputSlotProps = safeSlotProps?.htmlInput ?? {};
    const inputSlotProps = (safeSlotProps?.input ?? {}) as InputProps;
    const inputStyleSlotProps = inputSlotProps?.style ?? {};

    return {
      ...safeSlotProps,
      htmlInput: {
        ...htmlInputSlotProps,
        maxLength: maxLength,
      },
      input: {
        ...inputSlotProps,
        style: {
          ...inputStyleSlotProps,
          backgroundColor: backgroundFill,
        },
      },
    };
  }, [slotProps, backgroundFill, maxLength]);

  // ! render
  return <TextField slotProps={mergedInputSlotProps} {...restProps} />;
};

export default CommonTextField;
