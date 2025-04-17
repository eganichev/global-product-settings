import { IProductField, Nullable, TAddEditSingleFieldForm } from 'types';

export interface IAddEditSingleFieldModalProps {
  open: boolean;
  field?: Nullable<IProductField>;
  onClose: () => void;
  onSaveChanges: (formValues: TAddEditSingleFieldForm) => void;
}
