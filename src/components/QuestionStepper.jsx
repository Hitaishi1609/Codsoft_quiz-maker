import React, { useState } from 'react';
import { Stepper, Step, StepLabel, StepContent, Button } from '@mui/material';

const QuestionStepper = ({ questions }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = () => {
    // Process the answer and move to the next question
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSelectedOption('');
  };

  const handleBack = () => {
    // Go back to the previous question
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setSelectedOption('');
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const isLastStep = activeStep === (questions && questions.length - 1);

  const renderOptions = () => {
    return questions && questions[activeStep].options.map((option, index) => (
      <div key={index}>
        <label>
          <input
            type="radio"
            name={`question-${activeStep}`}
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
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
            <StepLabel>{question.quesStmt}</StepLabel>
            <StepContent>
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
