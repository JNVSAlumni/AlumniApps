import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { List, ListItem, ListItemIcon, ListItemText, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Alert } from "@mui/material";
import {
  iconButtonStyles,
  searchBoxContainer,
  searchBoxInputStyles,
  searchBoxStackStyles,
  searchButtonStyles,
  searchResultAlertContainerStyles,
  searchResultCardContentStyles,
  searchResultContainer,
  searchResultStackStyles,
} from "./AlumniSearch.styles";
import LabelIcon from "@mui/icons-material/Label";
import PlaceIcon from "@mui/icons-material/Place";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Config } from "../../config";

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

export const AlumniSearch = () => {
  const [alumni, setAlumni] = React.useState<IAlumnus[]>([]);
  const [searchResult, setSearchResult] = React.useState<IAlumnus[]>([]);

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 9000 + 1000);
    fetch(Config.AlumniSearchAPI + "?random=" + random)
      .then((response) => response.json())
      .then((data) => {
        setAlumni(data as IAlumnus[]);
        const value = "Bipul";
        var result = data.find((alumnus: any) => JSON.stringify(alumnus).toLowerCase().includes(value.toLowerCase()));
        console.log(result);
      });
  }, []);

  const onSearchType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || value.length < 3) {
      setSearchResult([]);
    } else {
      var result = alumni.filter((alumnus: any) => JSON.stringify(alumnus).toLowerCase().includes(value.toLowerCase()));
      setSearchResult(result);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={0} sx={searchBoxStackStyles}>
        <Paper sx={searchBoxContainer}>
          <IconButton sx={iconButtonStyles} aria-label="menu">
            <PersonIcon />
          </IconButton>
          <InputBase
            onChange={onSearchType}
            sx={searchBoxInputStyles}
            placeholder="Search Alumni"
            inputProps={{ "aria-label": "search alumni" }}
          />
          <IconButton type="button" sx={searchButtonStyles} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
      {searchResult.length > 0 && (
        <Stack direction="row" spacing={0} sx={searchResultAlertContainerStyles}>
          <Alert iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" /> }}>{searchResult.length} result(s) found!</Alert>
        </Stack>
      )}

      <Stack direction="row" spacing={0} sx={searchResultStackStyles}>
        {searchResult.map((row) => (
          <Card raised sx={searchResultContainer} key={row.Timestamp}>
            <CardContent sx={searchResultCardContentStyles}>
              <a href={row.Social} target="_blank">
                <Typography align="center" variant="h6" component="div">
                  {row.Name}
                </Typography>
              </a>
              <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <LabelIcon />
                  </ListItemIcon>
                  <ListItemText primary={row.Batch} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PlaceIcon />
                  </ListItemIcon>
                  <ListItemText primary={row.Location} />
                </ListItem>
                {row.Profile == "Job Holder" ? (
                  <>
                    <ListItem>
                      <ListItemIcon>
                        <BusinessIcon />
                      </ListItemIcon>
                      <ListItemText primary={row.Organisation} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText primary={row.Designation} />
                    </ListItem>
                  </>
                ) : (
                  <>
                    <ListItem>
                      <ListItemIcon>
                        <LocalLibraryIcon />
                      </ListItemIcon>
                      <ListItemText primary={row.Institute} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <ListItemText primary={row.Degree} />
                    </ListItem>
                  </>
                )}
              </List>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
};
