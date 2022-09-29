import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtonComp = (props) => {

  return (
    <ToggleButtonGroup
      orientation="horizontal"
    >
      <ToggleButton value="less" aria-label="less">
        <RemoveIcon />
      </ToggleButton>
      <ToggleButton value="more" aria-label="more">
        <AddIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleButtonComp