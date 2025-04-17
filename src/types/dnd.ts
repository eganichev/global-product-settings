import { RefCallback } from 'react';
import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

export interface ISortActivatorProps {
  ref: RefCallback<HTMLElement>;
  dragListeners: SyntheticListenerMap;
  dragAttributes: DraggableAttributes;
}
