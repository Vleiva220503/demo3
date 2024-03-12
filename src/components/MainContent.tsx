// MainContent.tsx
import React, { ReactNode } from 'react';

interface MainContentProps {
  title: string;
  children?: ReactNode; 
}

const MainContent: React.FC<MainContentProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col flex-grow p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {children}
    </div>
  );
};

export default MainContent;
