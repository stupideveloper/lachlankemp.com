import React, { useEffect, useState } from 'react';

export default function NoSSR({ children }) {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return <>{isMounted ? children : null}</>;
};
