import styled, { keyframes } from 'styled-components';

import { SkeletonProps } from './types';

const animation = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 135% 0%;
  }
`;

export const Container = styled.div<SkeletonProps>`
  width: ${({ $width }) => $width || 100}%;
  height: 100%;
  z-index: 20;
  background: linear-gradient(-90deg, #c4d1d8 0%, #304c6b 50%, #c4d1d8 100%);
  animation: ${animation} 1.2s ease-in-out infinite;
  background-size: 400% 400%;
  cursor: progress;
`;
