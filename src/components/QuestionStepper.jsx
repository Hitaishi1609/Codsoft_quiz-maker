import React, { useState } from 'react';
import { Stepper, Step, StepLabel, StepContent, Button } from '@mui/material';

const QuestionStepper = ({ questions }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);


  const handleNext = () => {
    // Process the answer and move to the next question
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSelectedOptions('');
  };

  const handleBack = () => {
    // Go back to the previous question
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setSelectedOptions('');
  };

  const handleRadioChange = (event) => {
    event.preventDefault()
    const updatedOptions = [...selectedOptions];
    updatedOptions[activeStep] = event.target.value;
    setSelectedOptions(updatedOptions);
  };

  console.log("selected options", selectedOptions)

  const isLastStep = activeStep === (questions && questions.length - 1);

  const renderOptions = () => {
    return questions && questions[activeStep].options.map((option, index) => (
      <div key={index}>
        <label>
          <input
            value={option} onChange={handleRadioChange}
            type="radio"
            name={`question-${activeStep}`}
            checked={selectedOptions === option}
          />
          {option}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {questions && questions.map((question, index) => (
          <Step key={index}>
            <StepLabel>Question : {index+1} </StepLabel>
            <StepContent>
            <label className='mb-2'>{question.quesStmt}</label>
              {renderOptions()}

              <Button onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                style={{ marginLeft: '10px' }}
              >
                {isLastStep ? 'Finish' : 'Next'}
              </Button>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {isLastStep && (
        <div>
          <h3>Quiz Completed!</h3>
          <p>You have completed the quiz.</p>
        </div>
      )}
    </div>
  );
};

export default QuestionStepper;
