import { FC, useState } from 'react';
import {
  Box,
  Card,
  Chip,
  Stack,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import { ExpandMore, DragHandle } from '@mui/icons-material';
import { CommonFieldControls, SubFieldCard } from 'components';
import { CollapsibleFieldCardProps } from './types';

const CollapsibleFieldCard: FC<CollapsibleFieldCardProps> = ({
  field,
  onEditClick,
  onHideClick,
  sortActivatorProps,
}) => {
  // ! state
  const [expanded, setExpanded] = useState(false);

  // ! variables
  const hasChildren = !!field.children?.length;

  const dndActivatorProps = sortActivatorProps
    ? {
        ref: sortActivatorProps.ref,
        ...sortActivatorProps.dragAttributes,
        ...sortActivatorProps.dragListeners,
      }
    : {};

  // ! handlers
  const onExpandToggle = () => {
    if (!hasChildren) return;

    setExpanded((prev) => !prev);
  };

  // ! render
  return (
    <Card
      elevation={0}
      sx={{
        px: 2,
        py: 2.5,
        border: '1px solid',
        borderRadius: '1rem',
        borderColor: 'custom.border.subtle',
      }}
    >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        {/* LEFT SIDE */}
        <Stack direction='row' alignItems='center' spacing={1}>
          <Box
            {...dndActivatorProps}
            sx={{
              cursor: 'grab',
              ':active': { cursor: 'grabbing' },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <DragHandle />
          </Box>

          {/* FIELD NAME */}
          <Typography fontWeight={600}>{field.name}</Typography>

          <Chip
            size='small'
            label='Global'
            variant='outlined'
            color='secondary'
            sx={{ fontWeight: 'bold', fontSize: '12px' }}
          />
        </Stack>

        {/* RIGHT SIDE */}
        <Stack direction='row' spacing={1}>
          <CommonFieldControls
            onEditClick={() => onEditClick(field.id)}
            onHideClick={() => onHideClick(field.id)}
          />

          {/* EXPAND ICON */}
          <IconButton
            size='small'
            onClick={onExpandToggle}
            sx={{
              visibility: hasChildren ? 'visible' : 'hidden',
              pointerEvents: hasChildren ? 'auto' : 'none',
            }}
          >
            <ExpandMore
              sx={{
                transform: expanded ? 'rotate(-180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease-in-out',
                color: 'text.primary',
              }}
            />
          </IconButton>
        </Stack>
      </Stack>

      {/* SUB FIELDS */}
      {hasChildren && (
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <Stack direction='column' spacing={2} pt={2.5}>
            {field.children!.map((nestedField) => (
              <SubFieldCard
                key={nestedField.id}
                field={nestedField}
                onEditClick={onEditClick}
                onHideClick={onHideClick}
              />
            ))}
          </Stack>
        </Collapse>
      )}
    </Card>
  );
};

export default CollapsibleFieldCard;
