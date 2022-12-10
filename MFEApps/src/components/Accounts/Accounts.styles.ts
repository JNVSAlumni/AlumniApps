import { SxProps } from "@mui/material";

export const tableStyles: SxProps = {
  minWidth: 650,
};

export const tableHeadRowStyles: SxProps = {
  fontWeight: 600,
};

export const tableRowStyles: SxProps = {
  "&:last-child td, &:last-child th": {
    border: 0,
  },
};
