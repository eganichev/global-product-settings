import { FC } from 'react';
import { KeyboardBackspace, Reorder } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { IGlobalFieldsHeaderSectionProps } from './types';
import { GLOBAL_FIELDS_SECTION_BREADCRUMBS } from './config';
import { AddFieldButton } from './components';
import { CommonBreadcrumbs } from 'components';

const GlobalFieldsHeaderSection: FC<IGlobalFieldsHeaderSectionProps> = ({
  onAddSingleFieldClick,
}) => {
  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Stack direction='row' spacing={1.5} alignItems='center'>
        <IconButton
          size='small'
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          <KeyboardBackspace />
        </IconButton>

        <Box>
          <Typography variant='h6' fontWeight={600}>
            Global fields settings
          </Typography>

          <CommonBreadcrumbs items={GLOBAL_FIELDS_SECTION_BREADCRUMBS} />
        </Box>
      </Stack>

      <Stack direction='row' spacing={2} alignItems='center'>
        <Button variant='text' startIcon={<Reorder />} color='secondary'>
          Reorder Fields
        </Button>

        <AddFieldButton onAddSingleFieldClick={onAddSingleFieldClick} />
      </Stack>
    </Grid>
  );
};

export default GlobalFieldsHeaderSection;
