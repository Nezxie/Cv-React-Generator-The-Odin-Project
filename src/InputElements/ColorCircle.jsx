import React, { useState } from 'react';
import Circle from '@uiw/react-color-circle';

export default function ColorCircle() {
  const [hex, setHex] = useState('#646cff');
  return (
    <Circle
      colors={[ '#646cff', '#294271', '#1d6140', '#302f28', '#121212' ]}
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
