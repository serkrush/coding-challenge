import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { withStyles } from "@material-ui/core/styles";

import Countries from "../components/CountriesList"
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import { REGIONS } from "../utils/consts";

const MenuItem = withStyles({
  root: {
    justifyContent: "flex-start",
    paddingLeft: 10
  }
})(MuiMenuItem);

// ArrowRightAlt
const Home = () => {
  let [filterItem, setFilterItem] = useState('');
  let [filterRegion, setFilterRegion] = useState(' ');

  const {fetchCountries, fetchCountry, fetchCountriesRegion} = useActions()
  useEffect(() => {
    fetchCountries()
  }, [])

  const {countries, error, loading} = useTypedSelector(state => state.countries)

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFilterRegion(event.target.value as string);
    fetchCountriesRegion({region: event.target.value});
    setFilterItem('')
  };

  const handleInputChange = (event: any) => {
    setFilterItem(event.target.value)
    fetchCountry({name: event.target.value})
    setFilterRegion(' ')
  };

  const regions = [ ...[{ label: 'All', value: ' ' }], ...REGIONS ]

  return (
    <Container maxWidth={'xl'}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                  placeholder={"Search for a country..."}
                  value={filterItem}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1} md={4}></Grid>
          <Grid item xs={7} sm={5} md={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filterRegion}
                  placeholder="Filter by Region"
                  onChange={handleSelectChange}
                >
                  {
                    regions.map(region => {
                      return <MenuItem  sx={{ width: "100%", textAlign:"left" }} value={region.value}>{region.label}</MenuItem>
                    })
                  }
                </Select>
              </FormControl>
            </Box>
               
          </Grid>
        </Grid>
        
        <Countries
          countCountries={8}
          countries={countries}
          error={error}
          loading={loading}
        />
      </Box>
    </Container>
  )
}

export default Home;