import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

const CityForm = ({ city, setCity }) => {
  const [inputValue, setInputValue] = useState(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue);
  };

  return (
    <Box display="flex" alignItems="center" padding={2}>
      <form onSubmit={handleSubmit}>
        <TextField
          size="small"
          name="city"
          label="city"
          id="city"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button type="submit" variant="contained" disableElevation>
          Search
        </Button>
      </form>
    </Box>
  );
};

export default CityForm;