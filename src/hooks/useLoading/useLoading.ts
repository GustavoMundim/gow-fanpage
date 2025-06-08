import { useState, useEffect } from 'react';

type Props = {
  time?: number;
  hasReset?: boolean;
};

export const UseLoading = ({ hasReset, time }: Props = { time: 5000 }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (hasReset) {
      setIsLoading(true);
    }
  }, [hasReset]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);
    return () => clearTimeout(timer);
  });

  return { isLoading, setIsLoading };
};
