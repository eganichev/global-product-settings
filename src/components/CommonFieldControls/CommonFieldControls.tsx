import { FC } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { VisibilityOutlined, Edit } from '@mui/icons-material';
import { ICommonFieldControlsProps } from './types';

const CommonFieldControls: FC<ICommonFieldControlsProps> = ({
  onHideClick,
  onEditClick,
}) => {
  return (
    <Stack direction='row' spacing={1}>
      <Button
        variant='outlined'
        color='secondary'
        size='small'
        onClick={onHideClick}
      >
        <Stack direction='row' alignItems='center' spacing={0.3}>
          <VisibilityOutlined sx={{ width: '1rem', height: '1rem' }} />

          <Typography variant='caption' fontWeight='bold'>
            Hide
          </Typography>
        </Stack>
      </Button>

      <Button
        variant='outlined'
        color='primary'
        size='small'
        onClick={onEditClick}
      >
        <Stack direction='row' alignItems='center' spacing={0.3}>
          <Edit sx={{ width: '1rem', height: '1rem' }} />

          <Typography variant='caption' fontWeight='bold'>
            Edit
          </Typography>
        </Stack>
      </Button>
    </Stack>
  );
};

export default CommonFieldControls;
