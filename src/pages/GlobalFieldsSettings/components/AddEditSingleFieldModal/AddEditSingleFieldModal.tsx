import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Stack } from '@mui/material';
import { TAddEditSingleFieldForm } from 'types';
import { IAddEditSingleFieldModalProps } from './types';
import {
  CommonModal,
  ProductFieldNameFormInput,
  ProductFieldPromptFormInput,
} from 'components';

const AddEditSingleFieldModal: FC<IAddEditSingleFieldModalProps> = ({
  open,
  field,
  onClose,
  onSaveChanges,
}) => {
  // ! hooks
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddEditSingleFieldForm>();

  // ! variables
  const isEditMode = !!field;
  const modalTitle = isEditMode ? 'Edit Field' : 'Add New Single Field';

  // ! effects
  useEffect(() => {
    if (!open) return reset();

    const valuesToEdit: TAddEditSingleFieldForm = {
      name: field?.name || '',
      prompt: field?.prompt || '',
    };

    reset(valuesToEdit);
  }, [field, open, reset]);

  // ! render
  return (
    <CommonModal
      open={open}
      onClose={onClose}
      title={modalTitle}
      onConfirm={handleSubmit(onSaveChanges)}
    >
      <Stack spacing={2} py={1}>
        <ProductFieldNameFormInput register={register} errors={errors} />

        <ProductFieldPromptFormInput
          minRows={20}
          errors={errors}
          register={register}
        />
      </Stack>
    </CommonModal>
  );
};

export default AddEditSingleFieldModal;
