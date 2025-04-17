import { FC } from 'react';
import { ICommonModalProps } from './types';
import {
  Stack,
  Dialog,
  Button,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Close } from '@mui/icons-material';

// TODO include Dialog props
const CommonModal: FC<ICommonModalProps> = ({
  open,
  title,
  onClose,
  children,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='lg'
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: '20px',
          },
        },
      }}
    >
      {/* CLOSE ICON */}
      <IconButton
        size='small'
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          transform: 'translate(-25%, 25%)',
          color: 'text.secondary',
        }}
      >
        <Close fontSize='small' />
      </IconButton>

      {/* TITLE */}
      <DialogTitle>{title}</DialogTitle>

      {/* MODAL CONTENT */}
      <DialogContent>{children}</DialogContent>

      {/* FOOTER */}
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
        >
          <Button variant='text' onClick={onClose} color='secondary'>
            Cancel
          </Button>

          <Button variant='contained' onClick={onConfirm}>
            Save Changes
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default CommonModal;
