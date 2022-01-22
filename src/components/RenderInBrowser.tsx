import { useEffect, useState } from 'react';

const RenderInBrowser = ({ children }: { children: React.ReactElement }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return children;
};

export default RenderInBrowser;
