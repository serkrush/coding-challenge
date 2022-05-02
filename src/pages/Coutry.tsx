import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ArrowBack from '@mui/icons-material/ArrowBack';

import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import NativeName from "../components/NativeName";
import Languages from "../components/Languages";
import BorderCountries from "../components/BorderCountries";

const Coutry = () => {
  const {fetchCountry} = useActions()
  const params = useParams();
  useEffect(() => {
    fetchCountry({...params,...{fullText: true}})
  }, [params])

  const {country, error, loading} = useTypedSelector(state => state.countries)

  const navigate = useNavigate();
  
  return (
    <Container maxWidth={'xl'}>
      <Grid spacing={2} mt={5}>
        <Button
          variant="text"
          onClick={() => navigate(-1)}
          startIcon={<ArrowBack />}
          style={{
            color: "rgba(0, 0, 0, 0.87)",
            boxShadow: "0px 0px 10px 1px #000000",
            paddingLeft: 30,
            paddingRight: 30
          }}
        >
          Back
        </Button>
      </Grid>
      <Grid spacing={2} mt={5}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={5}>
              <CardMedia
                component="img"
                image={`${country?.flags?.png}`}
                alt={country?.name?.common}
              />
            </Grid>
            <Grid item xs={12} md={1} lg={1}></Grid>
            <Grid item xs={12} md={7} lg={6}>
              <Typography gutterBottom variant="h5" component="h2" display="inline">
                <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">
                  {country?.name?.common}
                </Box>
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography gutterBottom mt={2} >
                    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Native Name:</Box>
                    {country?.name?.nativeName && <NativeName
                      names={country?.name?.nativeName}
                    />}
                  </Typography>
                  <Typography gutterBottom mt={2}>
                    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Population:</Box>
                    <Box sx={{ display: 'inline' }} pl={1}>{country?.population}</Box>
                  </Typography>
                  <Typography gutterBottom mt={2}>
                    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Region:</Box>
                    <Box sx={{ display: 'inline' }} pl={1}>{country?.region}</Box>
                  </Typography>
                  <Typography gutterBottom mt={2}>
                    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Sub Region:</Box>
                    <Box sx={{ display: 'inline' }} pl={1}>{country?.subregion}</Box>
                  </Typography>
                  <Typography gutterBottom mt={2}>
                    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Capital:</Box>
                    <Box sx={{ display: 'inline' }} pl={1}>{country?.capital && country?.capital.length > 0 && country?.capital[0]}</Box>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography gutterBottom mt={2}>
                    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Top Level Domain:</Box>
                    <Box sx={{ display: 'inline' }} pl={1}>{country?.tld && country?.tld.length > 0 && country?.tld[0]}</Box>
                  </Typography>
                  <Typography gutterBottom mt={2}>
                    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Currencies:</Box>
                    <Box sx={{ display: 'inline' }} pl={1}>{country?.currencies && Object.keys(country?.currencies)[0]}</Box>
                  </Typography>
                  <Typography gutterBottom mt={2}>
                    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Languages:</Box>
                    {country?.languages && <Languages
                      languages={country?.languages}
                    />}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item mt={7}>
                <Typography gutterBottom mt={2}>
                  <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">Border Countries:</Box>
                  {country?.languages && <BorderCountries
                    countries={country?.borders}
                  />}
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Box>
      </Grid>
    </Container>
  )
}

export default Coutry;