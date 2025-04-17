import { JSX } from 'react';
import { ISortActivatorProps } from 'types';

export type DnDSortableWrapperProps = {
  id: string | number;
  activeItem: unknown;
  render: (sortActivatorProps: ISortActivatorProps) => JSX.Element;
};
