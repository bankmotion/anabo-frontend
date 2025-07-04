import type { ReactNode } from 'react';

const MobileContainer = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-white max-w-md mx-auto p-4 relative">
    {children}
  </div>
);

export default MobileContainer; 