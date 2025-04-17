import { IProductField } from 'types';

export interface IGlobalFieldsListSectionProps {
  fields: IProductField[];
  onEditClick: (fieldId: IProductField['id']) => void;
  onHideClick: (fieldId: IProductField['id']) => void;
}
