import React from 'react';
import Box from '@mui/material/Box';

interface LanguagesProps {
  languages: any;
}


const Languages = (props: LanguagesProps) => {
  return (
    <Box sx={{ display: 'inline' }}>
      {
        Object.keys(props?.languages).map((key: any) => <Box sx={{ display: 'inline' }} pl={1}>{props?.languages[key]}</Box>)
      }
    </Box>
  )
}

export default Languages;