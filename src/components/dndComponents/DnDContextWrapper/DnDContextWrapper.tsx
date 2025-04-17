import { FC } from 'react';
import {
  useSensor,
  useSensors,
  DndContext,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
} from '@dnd-kit/core';
import { DndContextWrapperProps } from './types';

const DnDContextWrapper: FC<DndContextWrapperProps> = ({
  onDragStart,
  onDragEnd,
  children,
}) => {
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
    useSensor(KeyboardSensor),
  );

  // ! render
  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {children}
    </DndContext>
  );
};

export default DnDContextWrapper;
