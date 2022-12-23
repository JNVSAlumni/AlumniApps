import { SxProps } from "@mui/material";

export const searchBoxStackStyles: SxProps = {
  width: "100%",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: 4,
};
export const searchBoxContainer: SxProps = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  minWidth: 250,
  width: 450,
  marginBottom: 4,
};

export const iconButtonStyles: SxProps = {
  p: "10px",
};

export const searchBoxInputStyles: SxProps = {
  ml: 1,
  flex: 1,
};

export const searchButtonStyles: SxProps = {
  p: "10px",
};

export const searchResultStackStyles: SxProps = {
  justifyContent: "center",
  flexWrap: "wrap",
};

export const searchResultContainer: SxProps = {
  minWidth: 275,
  width: 320,
  margin: "5px",
};

export const searchResultCardContentStyles: SxProps = {
  padding: "10px 0px 0px 0px",
  ":last-child":{
    paddingBottom: 0,
  }
}
