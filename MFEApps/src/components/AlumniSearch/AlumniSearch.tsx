import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  iconButtonStyles,
  searchBoxContainer,
  searchBoxInputStyles,
  searchBoxStackStyles,
  searchButtonStyles,
  searchResultContainer,
  searchResultStackStyles,
} from "./AlumniSearch.styles";

// Define Alumni Interface
interface IAlumnus {
  Timestamp: string;
  Name: string;
  Batch: string;
  Exams: string;
  Location: string;
  Profile: string;
  Organisation: string;
  Designation: string;
  Institute: string;
  Degree: string;
  Social: string;
  Verified: number;
}

const apiEndpoint = "https://jnvsitamarhi.org/JsonData/alumni.json";

export const AlumniSearch = () => {
  const [alumni, setAlumni] = React.useState<IAlumnus[]>([]);
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 9000 + 1000);
    fetch(apiEndpoint + "?random=" + random)
      .then((response) => response.json())
      .then((data) => {
        setAlumni(data as IAlumnus[]);
      });
  }, []);
  return (
    <>
      <Stack direction="row" spacing={0} sx={searchBoxStackStyles}>
        <Paper component="form" sx={searchBoxContainer}>
          <IconButton sx={iconButtonStyles} aria-label="menu">
            <PersonIcon />
          </IconButton>
          <InputBase sx={searchBoxInputStyles} placeholder="Search Alumni" inputProps={{ "aria-label": "search alumni" }} />
          <IconButton type="button" sx={searchButtonStyles} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>

      <Stack direction="row" spacing={0} sx={searchResultStackStyles}>
        {alumni.map((row) => (
          <Card raised sx={searchResultContainer} key={row.Timestamp}>
            <CardContent>
              <Typography variant="h6" component="div">
                {row.Name}
              </Typography>
              <Typography variant="body2">
                <span>{row.Batch}</span>
                <br />
                <span>{row.Batch}</span>
                <br />
                <span>{row.Batch}</span>
                <br />
                <span>{row.Batch}</span>
                <br />
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
};
