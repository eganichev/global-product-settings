import { IProductField, Nullable, TAddEditSingleFieldForm } from 'types';

export const fakeCreateSingleField = (
  values: TAddEditSingleFieldForm,
): IProductField => {
  return {
    id: Math.random().toString(36).substring(2, 15),
    name: values.name,
    prompt: values.prompt,
  };
};

export function findFieldById(
  fields: IProductField[],
  targetId: string,
): Nullable<IProductField> {
  for (const field of fields) {
    if (field.id === targetId) return field;

    if (field.children?.length) {
      const found = findFieldById(field.children, targetId);
      if (found) return found;
    }
  }
  return null;
}

export function updateFieldById(
  fields: IProductField[],
  updatedField: IProductField,
): IProductField[] {
  return fields.map((field) => {
    if (field.id === updatedField.id) {
      return updatedField;
    }

    if (field.children?.length) {
      return {
        ...field,
        children: updateFieldById(field.children, updatedField),
      };
    }

    return field;
  });
}
