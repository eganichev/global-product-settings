import { Dispatch, SetStateAction, useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { DndContextProps, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { IProductField, Nullable } from 'types';

export function useSortableProductFieldsList(
  setItems: Dispatch<SetStateAction<IProductField[]>>,
) {
  const [active, setActive] = useState<Nullable<IProductField>>(null);

  const handleDragStart: DndContextProps['onDragStart'] = (
    event: DragStartEvent,
  ) => {
    setActive(event.active.data?.current?.activeItem ?? null);
  };

  function findParentArray(
    tree: IProductField[],
    targetId: IProductField['id'],
  ): Nullable<IProductField[]> {
    for (const node of tree) {
      if (node.children?.some((child) => child.id === targetId)) {
        return node.children;
      }
      if (node.children) {
        const found = findParentArray(node.children, targetId);
        if (found) return found;
      }
    }
    return null;
  }

  const handleDragEnd: DndContextProps['onDragEnd'] = (event: DragEndEvent) => {
    const { active, over } = event;
    setActive(null);

    if (!over || active.id === over.id) return;

    setItems((prevTree) => {
      const newTree = structuredClone(prevTree); // либо JSON.parse(JSON.stringify(prevTree))

      const sourceArray =
        findParentArray(newTree, active.id as IProductField['id']) ?? newTree;
      const targetArray =
        findParentArray(newTree, over.id as IProductField['id']) ?? newTree;

      // Сортируем только если в пределах одного родителя
      if (sourceArray !== targetArray) return prevTree;

      const oldIndex = sourceArray.findIndex((f) => f.id === active.id);
      const newIndex = sourceArray.findIndex((f) => f.id === over.id);

      if (oldIndex === -1 || newIndex === -1) return prevTree;

      const reordered = arrayMove(sourceArray, oldIndex, newIndex);
      if (sourceArray === newTree) return reordered;

      // Заменяем sourceArray в дереве
      const replaceArray = (tree: IProductField[]): IProductField[] => {
        return tree.map((node) => {
          if (node.children === sourceArray) {
            return { ...node, children: reordered };
          }

          if (node.children) {
            return { ...node, children: replaceArray(node.children) };
          }

          return node;
        });
      };

      return replaceArray(newTree);
    });
  };

  return {
    active,
    handleDragStart,
    handleDragEnd,
  };
}
