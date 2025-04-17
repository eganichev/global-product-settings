import { FC, memo } from 'react';
import { createPortal } from 'react-dom';
import { DragOverlay } from '@dnd-kit/core';
import { DragOverlayWrapperProps } from './types';

const DnDDragOverlayWrapper: FC<DragOverlayWrapperProps> = ({
  isActive,
  children,
}) => {
  return (
    <>
      {createPortal(
        <DragOverlay>{isActive ? children : null}</DragOverlay>,
        document.body,
      )}
    </>
  );
};

export default memo(DnDDragOverlayWrapper);
