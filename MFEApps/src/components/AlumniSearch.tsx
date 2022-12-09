import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

// Custom style definitions
const useStyles = makeStyles(() => ({
  stackStyles: {
    width: "100%",
  },
  cardStyles: {
    margin: "5px",
  },
}));

// Define Alumni Interface
interface IAlumnus {
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
  const classes = useStyles();
  const [alumni, setAlumni] = React.useState<IAlumnus[]>([]);
  React.useEffect(() => {
    const random = Math.floor(Math.random() * 9000 + 1000);
    fetch(apiEndpoint + "?random=" + random)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlumni(data as IAlumnus[]);
      });
  }, []);
  return (
    <>
      <Stack direction="row" flexWrap="wrap" spacing={0} justifyContent="center">
        <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", minWidth: 250, width: 450 }}>
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <PersonIcon />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Alumni" inputProps={{ "aria-label": "search alumni" }} />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>

      <Stack direction="row" flexWrap="wrap" spacing={0} justifyContent="center">
        {alumni.map((row) => (
          <Card raised className={classes.cardStyles} sx={{ minWidth: 275 }} key={row.Name + Math.floor(Math.random() * 9000 + 1000)}>
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
