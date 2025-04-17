export interface IProductField {
  id: string;
  name: string;
  prompt: string;
  children?: IProductField[];
}

// ! CRUD
export type TAddEditSingleFieldForm = Pick<IProductField, 'name' | 'prompt'>;
