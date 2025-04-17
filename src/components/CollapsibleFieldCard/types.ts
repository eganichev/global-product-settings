import { IProductField, ISortActivatorProps } from 'types';

export interface CollapsibleFieldCardProps {
  field: IProductField;
  onEditClick: (fieldId: string) => void;
  onHideClick: (fieldId: string) => void;
  sortActivatorProps?: ISortActivatorProps;
}
