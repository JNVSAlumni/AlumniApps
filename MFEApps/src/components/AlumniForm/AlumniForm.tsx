import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { fieldStyles, iframeStyles, submitButtonStyles } from "./AlumniForm.styles";
import { AlumniBatchOptions, ExamsPassedOptions, ProfileType, ProfileTypeOptions } from "./Constants";
import { LocationOptions } from "./Locations";

const apiEndpoint = "https://docs.google.com/forms/d/e/1FAIpQLSdXYLRuqPdrKCgxSyAv-6GgrxUqbVtdMwgMLFOj_wMyIvXkMg/formResponse";

export const AlumniForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [submitStatus, setSubmitStatus] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [batch, setBatch] = React.useState("");
  const [examsPassed, setExamsPassed] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [socialProfileLink, setSocialProfileLink] = React.useState("");
  const [currentLocation, setCurrentLocation] = React.useState("");
  const [profileType, setSelectedProfileType] = React.useState("");
  const [college, setCollege] = React.useState("");
  const [highestQualification, setHighestQualification] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [designation, setDesignation] = React.useState("");

  const handleMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = ValidateMobileNumber(event.target.value);
    console.log(result);
    setMobileNumber(event.target.value);
  };
  const handleBatchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBatch(event.target.value);
  };

  const handleExamsPassedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExamsPassed(event.target.value);
  };

  const handleProfileTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProfileType(event.target.value);
    if (event.target.value === ProfileType.Student) {
      setCompany("---NA---");
      setDesignation("---NA---");
      setCollege("");
      setHighestQualification("");
    }
    else if (event.target.value === ProfileType.JobHolder) {
      setCollege("---NA---");
      setHighestQualification("---NA---");
      setCompany("");
      setDesignation("");
    }
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLocation(event.target.value);
  };

  const formReset = () => {
    setName("");
    setBatch("");
    setExamsPassed("");
    setMobileNumber("");
    setEmail("");
    setSocialProfileLink("");
    setCurrentLocation("");
    setSelectedProfileType("");
    setCollege("");
    setHighestQualification("");
    setCompany("");
    setDesignation("");
  };

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

  return (
    <>
      <iframe ref={iframeRef} onLoad={handleIframeLoad} style={iframeStyles} name="hidden_iframe" id="hidden_iframe"></iframe>
      <form ref={formRef} action={apiEndpoint} method="POST" target="hidden_iframe" onSubmit={onSubmit}>
        <Stack direction="column">
          <TextField
            required
            sx={fieldStyles}
            value={name}
            variant="standard"
            label="Your Name"
            name="entry.2059521736"
            helperText="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            sx={fieldStyles}
            value={batch}
            select
            name="entry.23321339"
            variant="standard"
            label="Select Batch."
            helperText="Year of passing 10th Board"
            onChange={handleBatchChange}
          >
            {AlumniBatchOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            sx={fieldStyles}
            value={examsPassed}
            select
            name="entry.2020491004"
            variant="standard"
            label="Select Exams."
            helperText="Select Exams passed from JNV Sitamarhi"
            onChange={handleExamsPassedChange}
          >
            {ExamsPassedOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            sx={fieldStyles}
            value={mobileNumber}
            variant="standard"
            name="entry.219439507"
            label="Mobile Number"
            helperText="Enter your 10 digits mobile no."
            onChange={handleMobileNumberChange}
          />
          <TextField
            required
            sx={fieldStyles}
            value={email}
            variant="standard"
            name="entry.2110054454"
            label="Email Address"
            helperText="Enter your email address."
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            sx={fieldStyles}
            value={socialProfileLink}
            variant="standard"
            name="entry.1146134730"
            label="Social Profile Link"
            helperText="Enter your Facebook / Instagram / Social profile link."
            onChange={(e) => setSocialProfileLink(e.target.value)}
          />
          <TextField
            required
            sx={fieldStyles}
            value={currentLocation}
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
          <TextField
            required
            sx={fieldStyles}
            value={profileType}
            select
            variant="standard"
            name="entry.1072180231"
            label="Select your profile type."
            onChange={handleProfileTypeChange}
            helperText="Select your profile type."
          >
            {ProfileTypeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            sx={fieldStyles}
            value={company}
            InputProps={{
              readOnly: profileType === ProfileType.Student,
            }}
            variant="standard"
            name="entry.1096792936"
            label="Company / Organization"
            helperText="Company / Organization where you currently work."
            onChange={(e) => setCompany(e.target.value)}
          />
          <TextField
            required
            sx={fieldStyles}
            value={designation}
            InputProps={{
              readOnly: profileType === ProfileType.Student,
            }}
            variant="standard"
            name="entry.645748317"
            label="Designation"
            helperText="Your designation at work."
            onChange={(e) => setDesignation(e.target.value)}
          />
          <TextField
            required
            sx={fieldStyles}
            InputProps={{
              readOnly: profileType === ProfileType.JobHolder,
            }}
            value={college}
            variant="standard"
            name="entry.1601452556"
            label="College / University"
            helperText="College / University attending / last attended."
            onChange={(e) => setCollege(e.target.value)}
          />
          <TextField
            required
            sx={fieldStyles}
            value={highestQualification}
            InputProps={{
              readOnly: profileType === ProfileType.JobHolder,
            }}
            variant="standard"
            name="entry.1485639544"
            label="Highest Qualification"
            helperText="Your highest degree completed or pursuing."
            onChange={(e) => setHighestQualification(e.target.value)}
          />
        </Stack>
        <Button sx={submitButtonStyles} type="submit" variant="contained">
          Submit
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

const ValidateMobileNumber = (mobileNumber: string) => {
  const regexMobileNumber = /^[6-9]\d{9}$|^[0][6-9]\d{9}$|^[+][9][1][6-9]\d{9}$/g;
  const result = mobileNumber.match(regexMobileNumber);
  if (result?.length === 1) {
    return true;
  }
  return false;
};
