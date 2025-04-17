import { useState, MouseEvent, FC } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Add, ArrowDropDown } from '@mui/icons-material';
import { IAddFieldButtonTypes } from './types';

const AddFieldButton: FC<IAddFieldButtonTypes> = ({
  onAddSingleFieldClick,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type: 'single' | 'nested') => {
    setAnchorEl(null);

    switch (type) {
      case 'single':
        onAddSingleFieldClick();
        break;
      case 'nested':
        console.log('Add New Sub-Specifications Field');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Button
        variant='outlined'
        startIcon={<Add />}
        endIcon={<ArrowDropDown />}
        onClick={handleClick}
      >
        Add Global Field
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: '1.25rem',
              mt: 1,
            },
          },
        }}
      >
        <MenuItem onClick={() => handleClose('single')}>
          Add New Single Field
        </MenuItem>

        <MenuItem onClick={() => handleClose('nested')}>
          Add New Sub-Specifications Field
        </MenuItem>
      </Menu>
    </>
  );
};

export default AddFieldButton;
