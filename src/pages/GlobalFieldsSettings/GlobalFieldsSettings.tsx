import { useRef, useState } from 'react';
import { Stack } from '@mui/material';
import {
  AddEditSingleFieldModal,
  GlobalFieldsListSection,
  GlobalFieldsHeaderSection,
} from './components';
import { IProductField, Nullable, TAddEditSingleFieldForm } from 'types';
import { useSortableProductFieldsList } from 'hooks';
import {
  findFieldById,
  updateFieldById,
  fakeCreateSingleField,
} from './helpers';
import {
  DnDContextWrapper,
  CollapsibleFieldCard,
  DnDDragOverlayWrapper,
} from 'components';
import { mockProductFields } from 'mock';

const GlobalFieldsSettings = () => {
  const [isSingleFieldModal, setIsSingleFieldModal] = useState(false);
  const [fields, setFields] = useState<IProductField[]>([...mockProductFields]);
  const { handleDragStart, handleDragEnd, active } =
    useSortableProductFieldsList(setFields);

  // ! refs
  const fieldToEditRef = useRef<Nullable<IProductField>>(null);

  // ! handlers
  const onCloseAddSingleFieldModal = () => {
    setIsSingleFieldModal(false);
    fieldToEditRef.current = null;
  };

  const onConfirmSingleFieldModal = (formValues: TAddEditSingleFieldForm) => {
    // create new field
    if (!fieldToEditRef.current) {
      const createdField = fakeCreateSingleField(formValues);
      setFields((prev) => [createdField, ...prev]);

      onCloseAddSingleFieldModal();
      return;
    }

    // edit existing field
    const updatedField = {
      ...fieldToEditRef.current,
      ...formValues,
    };
    setFields((prev) => updateFieldById(prev, updatedField));

    onCloseAddSingleFieldModal();
  };

  const onAddSingleFieldClick = () => {
    setIsSingleFieldModal(true);
  };

  const onEditClick = (fieldId: IProductField['id']) => {
    const candidate = findFieldById(fields, fieldId);
    if (!candidate) {
      console.error('Field not found: ', fieldId);
      return;
    }

    fieldToEditRef.current = candidate;
    setIsSingleFieldModal(true);
  };

  const onHideClick = (fieldId: IProductField['id']) => {
    console.log('Hide field: ', fieldId);
  };

  // ! render
  return (
    <>
      {/* MAIN PAGE CONTENT */}
      <Stack direction='column' spacing={4} py={2}>
        <GlobalFieldsHeaderSection
          onAddSingleFieldClick={onAddSingleFieldClick}
        />
        <DnDContextWrapper
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <GlobalFieldsListSection
            fields={fields}
            onEditClick={onEditClick}
            onHideClick={onHideClick}
          />

          <DnDDragOverlayWrapper isActive={!!active}>
            <CollapsibleFieldCard
              field={active!}
              onHideClick={() => {}}
              onEditClick={() => {}}
            />
          </DnDDragOverlayWrapper>
        </DnDContextWrapper>
      </Stack>

      {/* MODALS */}
      <AddEditSingleFieldModal
        open={isSingleFieldModal}
        field={fieldToEditRef.current}
        onClose={onCloseAddSingleFieldModal}
        onSaveChanges={onConfirmSingleFieldModal}
      />
    </>
  );
};

export default GlobalFieldsSettings;
