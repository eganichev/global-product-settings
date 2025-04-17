import { CSSProperties, FC, memo } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { ISortActivatorProps } from 'types';
import { DnDSortableWrapperProps } from './types';

const DnDSortableWrapper: FC<DnDSortableWrapperProps> = ({
  id,
  render,
  activeItem,
}) => {
  const {
    listeners,
    attributes,
    isDragging,
    transition,
    transform,
    setNodeRef,
    setActivatorNodeRef,
  } = useSortable({
    id,
    data: { activeItem },
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? 'none' : transition,
    opacity: isDragging ? 0.6 : 1,
  };

  const sortActivatorProps: ISortActivatorProps = {
    ref: setActivatorNodeRef,
    dragListeners: listeners ?? {},
    dragAttributes: attributes,
  };

  // ! render
  return (
    <div ref={setNodeRef} style={style}>
      {render(sortActivatorProps)}
    </div>
  );
};

export default memo(DnDSortableWrapper);
