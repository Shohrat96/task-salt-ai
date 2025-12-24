import React from 'react';

export const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`divider ${className || ''}`}></div>;
};
