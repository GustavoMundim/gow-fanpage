import * as S from './SkeletonLoading.styles';
import { SkeletonProps } from './types';

const SkeletonLoading = ({ $width }: SkeletonProps) => {
  return <S.Container $width={$width} />;
};

export default SkeletonLoading;
