import { PropsWithChildren } from 'react';
import { DndContextProps } from '@dnd-kit/core';

export interface DndContextWrapperProps extends PropsWithChildren {
  onDragStart: DndContextProps['onDragStart'];
  onDragEnd: DndContextProps['onDragEnd'];
}
