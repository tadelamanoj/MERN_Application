import React from 'react';
import { FixedSizeList as List } from 'react-window';

// Assuming each line has a fixed height of 30 pixels
const lineHeight = 30;
const totalLines = 10000;

const Row = ({ index, style }) => (
  <div style={{ ...style, borderBottom: '1px solid #ccc', padding: '5px' }}>
    Line {index}
  </div>
);

const VirtualizedList = () => {
  return (
    <div style={{ height: '400px', width: '600px', border: '1px solid #ccc' }}>
      <List
        height={400}
        itemCount={totalLines}
        itemSize={lineHeight}
        width={600}
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedList;
