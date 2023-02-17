import { ReactNode } from 'react';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface ListItem {
  id: string;
  url?: string;
  children: ReactNode;
}
