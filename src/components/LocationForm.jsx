import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Box, Button, Container, Paper } from "@mui/material";

const LocationForm = ({ location, setLocation }) => {
  const [inputValue, setInputValue] = useState(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(inputValue);
  };

  return (
      <Box
        display="flex"
        alignItems="center"
        padding={2}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            size="small"
            name="location"
            label="Location"
            id="location"
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

export default LocationForm;
