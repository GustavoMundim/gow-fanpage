import { ReactNode } from 'react';

export type SkeletonProps = {
  $width?: string;
  children?: ReactNode;
  depedency?: number | string | boolean;
  delay?: number;
};
