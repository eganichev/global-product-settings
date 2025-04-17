import { IProductField } from 'types';

export interface ISubFieldCardProps {
  field: IProductField;
  onEditClick: (fieldId: string) => void;
  onHideClick: (fieldId: string) => void;
}
