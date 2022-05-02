import React, { useState } from "react";
import { Pagination } from "@material-ui/lab";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import usePagination from "../Pagination";
import CountryItem from "./CountryItem";

interface CountriesProps {
  countCountries: number;
  countries: any[] | undefined;
  error: string | null;
  loading: boolean | undefined;
}

const Countries = (props: CountriesProps) => {
  let [page, setPage] = useState(1);

  const {countries, error, loading, countCountries} = props

  const count = countries && countries.length > 0 && Math.ceil(countries.length / countCountries);
  const _DATA = usePagination(countries, countCountries);
  
  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  let content;

  if (loading) {
    content = <Grid item >
        <Typography variant="h3" pt={5} pb={5}>
        <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">
          Loading...
        </Box>
      </Typography>
    </Grid>;
  } else if (error) {
    content = <Typography variant="h3" pt={5} pb={5}>
    <Box sx={{ display: 'inline', fontWeight: 'bold' }} fontWeight="fontWeightMedium">
      {error}
    </Box>
  </Typography>;;
  } else {
    content = _DATA.currentData().map((v: any) => {
      return (
        <CountryItem
          data={v}
        />
      );
    })
  }

  return (
    <Grid container maxWidth={'xl'} pt={2}>
      <Grid container spacing={4} pt={2}>
        {content}
      </Grid>

      <Grid container>
        <Pagination
          count={count ? count : 0}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          style={{
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Countries;
