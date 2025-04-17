import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { IGlobalFieldsListSectionProps } from './types';
import { CollapsibleFieldCard, DnDSortableWrapper } from 'components';

const GlobalFieldsListSection: FC<IGlobalFieldsListSectionProps> = ({
  fields,
  onEditClick,
  onHideClick,
}) => {
  return (
    <Stack direction='column' spacing={2}>
      <Stack direction='row' spacing={1} alignItems='center' mt={1}>
        <InfoOutlined sx={{ color: 'text.primary', fontSize: 18 }} />
        <Typography variant='body2'>
          Manage Global product fields that appear across all projects.
        </Typography>
      </Stack>

      <Stack direction='column' spacing={1.5} px={2} pb={2} padding={0}>
        <SortableContext
          items={fields.map(({ id }) => id)}
          strategy={verticalListSortingStrategy}
        >
          {fields.map((field) => (
            <DnDSortableWrapper
              key={field.id}
              id={field.id}
              activeItem={field}
              render={(sortActivatorProps) => (
                <CollapsibleFieldCard
                  key={field.id}
                  field={field}
                  onEditClick={onEditClick}
                  onHideClick={onHideClick}
                  sortActivatorProps={sortActivatorProps}
                />
              )}
            />
          ))}
        </SortableContext>
      </Stack>
    </Stack>
  );
};

export default GlobalFieldsListSection;
