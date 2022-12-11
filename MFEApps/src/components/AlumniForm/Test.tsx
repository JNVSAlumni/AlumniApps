import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { fieldStyles } from "./AlumniForm.styles";
import { LocationOptions } from "./Locations";

const apiEndpoint = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScXWSz7P5SH7OFVTuLW4yb1BCdU8g-Oyf5KmyByYx7zfH5wEQ/formResponse";

const iframeStyles: React.CSSProperties = {
  display: "none",
};

export const Test = () => {
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [submitStatus, setSubmitStatus] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitStatus(true);
  };

  const handleClose = () => {
    formReset();
    setOpen(false);
  };

  const handleIframeLoad = () => {    
    if (submitStatus) {
        setOpen(true);
        setSubmitStatus(false);
      }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  }

  const formReset = () => {
    setName("");
    setLocation("");
  }

  return (
    <>
      <iframe onLoad={handleIframeLoad} ref={iframeRef} style={iframeStyles} name="hidden_iframe" id="hidden_iframe"></iframe>
      <form ref={formRef} action={apiEndpoint} method="POST" target="hidden_iframe" onSubmit={onSubmit}>
        <Stack direction="column">
          <TextField
            required
            sx={fieldStyles}
            value={name}
            variant="standard"
            label="Your Name"
            name="entry.1247836267"
            helperText="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            sx={fieldStyles}
            value={location}
            select
            name="entry.2022448842"
            variant="standard"
            label="Select Location."
            helperText="Select your current location."
            onChange={handleLocationChange}
          >
            {LocationOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Button type="button" variant="contained" onClick={formReset} >
          Reset
        </Button>
      </form>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Congrats! 🎉"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">You have successfully submitted your details !</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
