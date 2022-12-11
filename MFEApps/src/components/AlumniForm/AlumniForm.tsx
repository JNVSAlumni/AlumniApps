import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { errorAlertStyles, fieldStyles, iframeStyles, submitButtonStyles } from "./AlumniForm.styles";
import { AlumniBatchOptions, ExamsPassedOptions, ProfileType, ProfileTypeOptions } from "./Constants";
import { LocationOptions } from "./Locations";

const apiEndpoint = "https://docs.google.com/forms/d/e/1FAIpQLSdXYLRuqPdrKCgxSyAv-6GgrxUqbVtdMwgMLFOj_wMyIvXkMg/formResponse";

export const AlumniForm = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [isFormValid, setIsFormValid] = React.useState<boolean>(false);
  const [errorMessages, setErrorMessages] = React.useState<string[]>([]);
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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    validateForm();
  };

  const handleBatchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBatch(event.target.value);
    validateForm();
  };

  const handleExamsPassedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExamsPassed(event.target.value);
    validateForm();
  };

  const handleMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(event.target.value);
    validateForm();
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    validateForm();
  };

  const handleSocialProfileLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSocialProfileLink(event.target.value);
    validateForm();
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLocation(event.target.value);
    validateForm();
  };

  const handleProfileTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProfileType(event.target.value);
    if (event.target.value === ProfileType.Student) {
      setCompany("---NA---");
      setDesignation("---NA---");
      setCollege("");
      setHighestQualification("");
    } else if (event.target.value === ProfileType.JobHolder) {
      setCollege("---NA---");
      setHighestQualification("---NA---");
      setCompany("");
      setDesignation("");
    }
    validateForm();
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
    validateForm();
  };

  const handleDesignationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesignation(event.target.value);
    validateForm();
  };

  const handleCollegeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollege(event.target.value);
    validateForm();
  };

  const handleHighestQualificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHighestQualification(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    const errorMessages: string[] = [];
    const isEmailValid = ValidateEmail(email);
    const isMobileNumberValid = ValidateMobileNumber(mobileNumber);
    if (!isEmailValid) {
      errorMessages.push("Please enter a valid email address.");
    }
    if (!isMobileNumberValid) {
      errorMessages.push("Please enter a valid 10 digit mobile number.");
    }
    setErrorMessages(errorMessages);
    setIsFormValid(isEmailValid && isMobileNumberValid);
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
            onChange={handleNameChange}
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
            onChange={handleEmailChange}
          />
          <TextField
            required
            sx={fieldStyles}
            value={socialProfileLink}
            variant="standard"
            name="entry.1146134730"
            label="Social Profile Link"
            helperText="Enter your Facebook / Instagram / Social profile link."
            onChange={handleSocialProfileLinkChange}
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
            helperText="Select your profile type."
            onChange={handleProfileTypeChange}
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
            onChange={handleCompanyChange}
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
            onChange={handleDesignationChange}
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
            onChange={handleCollegeChange}
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
            onChange={handleHighestQualificationChange}
          />
        </Stack>
        <Button disabled={!isFormValid} sx={submitButtonStyles} type="submit" variant="contained">
          Submit
        </Button>
      </form>
      {errorMessages.length > 0 && (
        <Alert sx={errorAlertStyles} severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMessages.map((message) => (
            <div key={message}>{message}</div>
          ))}
        </Alert>
      )}
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Congrats! 🎉"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">You have successfully submitted your details. The summary of this form submission has been sent to you via email.</DialogContentText>
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

const ValidateEmail = (email: string) => {
  const regexEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/g;
  const result = email.match(regexEmail);
  if (result?.length === 1) {
    return true;
  }
  return false;
};
