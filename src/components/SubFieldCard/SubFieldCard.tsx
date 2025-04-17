import { FC } from 'react';
import { ISubFieldCardProps } from './types';
import { Stack } from '@mui/material';
import { CommonFieldControls, CommonTextField } from 'components';

const SubFieldCard: FC<ISubFieldCardProps> = ({
  field,
  onEditClick,
  onHideClick,
}) => {
  return (
    <Stack spacing={3} direction='row' justifyContent='space-between'>
      {/* LEFT SIDE */}
      <CommonTextField
        size='small'
        value={field.name}
        sx={{ flexBasis: '40%' }}
        backgroundFill='var(--mui-palette-custom-backgroundSubtle)'
      />

      {/* RIGHT SIDE */}
      <Stack
        spacing={2}
        direction='column'
        flexBasis='60%'
        alignItems='flex-end'
        justifyContent='space-between'
      >
        <CommonTextField
          multiline
          fullWidth
          size='small'
          minRows={4}
          maxRows={6}
          value={field.name}
        />

        <CommonFieldControls
          onEditClick={() => onEditClick(field.id)}
          onHideClick={() => onHideClick(field.id)}
        />
      </Stack>
    </Stack>
  );
};

export default SubFieldCard;
