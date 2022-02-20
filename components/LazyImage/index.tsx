import React, { useState, useEffect, HTMLAttributes } from 'react';

type Props = {} & HTMLAttributes<HTMLImageElement>;

const Image = (props: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loaded) {
        setLoaded(true);
      }

      clearTimeout(timeout);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [loaded]);

  return (
    <img
      {...props}
      onLoad={() => setLoaded(true)}
      style={{ opacity: loaded ? 1 : 0, transition: 'all 0.3s' }}
    />
  );
};

export default Image;
