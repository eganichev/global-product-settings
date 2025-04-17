import { PropsWithChildren } from 'react';

export interface ICommonModalProps extends PropsWithChildren {
  open: boolean;
  title: string;
  onClose: () => void;
  onConfirm: () => void;
}
