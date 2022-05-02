import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

import { CODE_ROUTE } from "../utils/consts";

interface BorderCountriesProps {
  countries: any[];
}

const BorderCountries = (props: BorderCountriesProps) => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} direction="row" ml={2} sx={{ display: 'inline' }}>
      {
        props?.countries && props.countries.map((country: any) => <Button
                                                                    variant="text"
                                                                    onClick={() => navigate(`${CODE_ROUTE}/${country}`)}
                                                                    style={{
                                                                      color: "rgba(0, 0, 0, 0.87)",
                                                                      boxShadow: "0px 0px 10px 1px #000000",
                                                                      paddingLeft: 30,
                                                                      paddingRight: 30,
                                                                      marginBottom: 7
                                                                    }}
                                                                  >
                                                                    {country}
                                                                  </Button>
        )
      }
    </Stack>
  )
}

export default BorderCountries;