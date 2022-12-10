import { MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { fieldStyles } from "./AlumniForm.styles";
import { alumniBatches, examsPassed } from "./Constants";

export const AlumniForm = () => {
  const [batch, setBatch] = React.useState("");
  const [examsPassedFromJNV, setExamsPassed] = React.useState("");
  const handleBatchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBatch(event.target.value);
  };

  const handleExamsPassedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExamsPassed(event.target.value);
  };

  return (
    <>
      <div>
        <Stack direction="column">
          <TextField sx={fieldStyles} required label="Your Name" defaultValue="" placeholder="Your Name" helperText="Enter your Name" />
          <TextField
            sx={fieldStyles}
            select
            label="Select"
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
            sx={fieldStyles}
            select
            label="Select"
            value={examsPassedFromJNV}
            onChange={handleExamsPassedChange}
            helperText="Exams passed from JNV Sitamarhi"
          >
            {examsPassed.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={fieldStyles}
            required
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
        </Stack>
      </div>
    </>
  );
};
