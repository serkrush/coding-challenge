import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Header = () => {
  return (
    <Grid spacing={2} boxShadow={2} mb={2} >
      <Container maxWidth={'xl'}>
        <Typography variant="h3" pt={5} pb={5}>
          <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">
            Where in the world?
          </Box>
        </Typography>
      </Container>
    </Grid>
  )
}

export default Header;