import React from 'react';

interface SpacerProps {
  minWidth?: number | string;
  minHeight?: number | string;
}

const Spacer: React.FC<SpacerProps> = ({ minWidth, minHeight }) => {
  const style: React.CSSProperties = {
    flexGrow: 1, 
    minWidth: minWidth || 'auto',
    minHeight: minHeight || 'auto',
  };

  return <div style={style} />;
};

export default Spacer;
