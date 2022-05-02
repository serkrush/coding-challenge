import React from 'react';
import Box from '@mui/material/Box';

interface NativeNameProps {
  names: any;
}

const NativeName = (props: NativeNameProps) => {
  return (
    <Box sx={{ display: 'inline' }}>
      {
        Object.keys(props?.names).map((key: any) => <Box sx={{ display: 'inline' }} pl={1}>{props?.names[key]?.common}({key})</Box>)
      }
    </Box>
  )
}

export default NativeName;