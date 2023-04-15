import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const steps = ["Email Address", "Verification Code", "Reset Password"];

export default function ResetForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleSubmit = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      <Stepper>
        {steps.map((s, i) => (
          <Step key={i} completed={activeStep > i} active={activeStep === i}>
            <StepLabel>{s}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ m: 2, height: 200, backgroundColor: "black" }}></Box>

      <Box sx={{ display: "flex" }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={() =>
            activeStep === 0 ? setActiveStep(0) : setActiveStep(activeStep - 1)
          }
          sx={{ mr: 1 }}
        >
          Back
        </Button>

        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={handleSubmit}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}
