import { IProductField } from 'types';

export const mockProductFields: IProductField[] = [
  {
    id: '1',
    name: 'Color',
    prompt: 'What color is the product?',
  },
  {
    id: '2',
    name: 'Material',
    prompt: 'What material is it made of?',
    children: [
      {
        id: '2.1',
        name: 'Base Material',
        prompt: 'Base layer material',
      },
      {
        id: '2.2',
        name: 'Finish',
        prompt: 'Surface finish',
      },
    ],
  },
  {
    id: '3',
    name: 'Box Type',
    prompt: 'Type of packaging box?',
    children: [
      {
        id: '3.1',
        name: 'Material',
        prompt: 'What is the box made of?',
      },
    ],
  },
  {
    id: '4',
    name: 'Length',
    prompt: 'Length of the product',
  },
  {
    id: '5',
    name: 'Width',
    prompt: 'Width of the product',
  },
];
