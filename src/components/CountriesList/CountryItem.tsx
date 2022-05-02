import React, { useState } from "react";

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import { COUNTRY_ROUTE } from "../../utils/consts";

interface CountryItemProps {
  data: any;
}


const CountryItem = (props: CountryItemProps) => {
  const {data} = props
  const navigate = useNavigate();
  return (
    <Grid item key={`${data?.name?.common}-${data?.ccn3}`} xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card
        onClick={() => navigate(`${COUNTRY_ROUTE}/${data?.name?.common}`)}
      >
        <CardActionArea 
          sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "flex-start" }}
        >
          <CardMedia
            component="img"
            image={`${data?.flags?.png}`}
            alt={data?.name?.common}
            style={{height: 200, width: '100%'}}
          />
          <CardContent 
            style={{width: '100%'}}
          >
            <Typography gutterBottom variant="h5" component="h2">
              <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">{data?.name?.common}</Box>
            </Typography>
            <Typography>
              <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Population:</Box>
              <Box sx={{ display: 'inline' }} pl={1}>{data?.population}</Box>
            </Typography>
            <Typography>
              <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Region:</Box>
              <Box sx={{ display: 'inline' }} pl={1}>{data?.region}</Box>
            </Typography>
            <Typography>
              <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Capital:</Box>
              <Box sx={{ display: 'inline' }} pl={1}>{data?.capital?.length > 0 && data?.capital[0]}</Box>
            </Typography>
          </CardContent>
        </CardActionArea> 
      </Card>
    </Grid>

  );
}

export default CountryItem;
