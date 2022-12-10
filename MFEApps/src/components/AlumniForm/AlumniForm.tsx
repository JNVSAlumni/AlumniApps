import { MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { fieldStyles } from "./AlumniForm.styles";
import { alumniBatches, examsPassed, profileTypes } from "./Constants";

export const AlumniForm = () => {
  const [batch, setBatch] = React.useState("");
  const [examsPassedFromJNV, setExamsPassed] = React.useState("");
  const [selectedProfileType, setSelectedProfileType] = React.useState("");
  const handleBatchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBatch(event.target.value);
  };

  const handleExamsPassedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExamsPassed(event.target.value);
  };

  const handleProfileTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProfileType(event.target.value);
  };

  return (
    <>
      <div>
        <Stack direction="column">
          <TextField sx={fieldStyles} required label="Your Name" defaultValue="" placeholder="Your Name" helperText="Enter your Name" />
          <TextField
            required
            sx={fieldStyles}
            select
            label="Select Batch."
            value={batch}
            onChange={handleBatchChange}
            helperText="Year of passing 10th Board"
          >
            {alumniBatches.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            sx={fieldStyles}
            select
            label="Select Exams."
            value={examsPassedFromJNV}
            onChange={handleExamsPassedChange}
            helperText="Select Exams passed from JNV Sitamarhi"
          >
            {examsPassed.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            sx={fieldStyles}
            label="Mobile Number"
            defaultValue=""
            placeholder="Your Name"
            helperText="Enter your mobile no."
          />
          <TextField
            sx={fieldStyles}
            required
            label="Email Address"
            defaultValue=""
            placeholder="Your Email"
            helperText="Enter your email address."
          />
          <TextField
            sx={fieldStyles}
            required
            label="Social Profile Link"
            defaultValue=""
            placeholder="Social Profile Link"
            helperText="Enter your Facebook / Instagram / Social profile link."
          />
          <TextField
            sx={fieldStyles}
            required
            label="Current Location"
            defaultValue=""
            placeholder="Current Location"
            helperText="Enter your current location."
          />
          <TextField
            required
            sx={fieldStyles}
            select
            label="Select your profile type."
            value={selectedProfileType}
            onChange={handleProfileTypeChange}
            helperText="Select your profile type."
          >
            {profileTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={fieldStyles}
            required
            label="College / University"
            defaultValue=""
            placeholder="College / University"
            helperText="College / University attending / last attended."
          />
          <TextField
            sx={fieldStyles}
            required
            label="Highest Qualification"
            defaultValue=""
            placeholder="Highest Qualification"
            helperText="Your highest degree completed or pursuing."
          />
          <TextField
            sx={fieldStyles}
            required
            label="Company / Organization"
            defaultValue=""
            placeholder="Company / Organization"
            helperText="Company / Organization where you currently work."
          />
          <TextField
            sx={fieldStyles}
            required
            label="Designation"
            defaultValue=""
            placeholder="Designation"
            helperText="Your designation at work."
          />
        </Stack>
      </div>
    </>
  );
};
