import * as React from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Step, StepButton, Stepper } from '@mui/material';
import Profile from './Profile';
import EducationForm from './Education';
import Skill from './Skills';
import Projects from './Projects';
import Experience from './Experience';

const steps = [
    {
        id: 1,
        title: 'Profile',
        content: <Profile />,
    },
    {
        id: 2,
        title: 'Education',
        content: <EducationForm />,
    },
    {
        id: 3,
        title: 'Skills',
        content: <Skill />,
    },
    {
        id: 4,
        title: 'Projects',
        content: <Projects />,
    },
    {
        id: 5,
        title: 'Experience',
        content: <Experience />,
    },
    {
        id: 6,
        title: 'Resume',
        content: "Resume page"
    }

];

export default function ResumeSteps() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newCompleted = { ...completed };
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);

        if (isLastStep() && !allStepsCompleted()) {
            const newActiveStep = steps.findIndex((step, i) => !(i in newCompleted));
            setActiveStep(newActiveStep);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label.id} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label.title}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>

                        <div >{steps[activeStep].content}</div>

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                variant='outlined'
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button
                                onClick={handleNext}
                                sx={{ mr: 1 }}
                                variant='outlined'
                                disabled={isLastStep() || allStepsCompleted()}
                            >
                                Next
                            </Button>
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <Typography variant="h6" sx={{ display: 'inline-block' }}>
                                        Step {activeStep + 1} already completed
                                    </Typography>
                                ) : (
                                    <Button onClick={handleComplete} variant='outlined'>
                                        {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                    </Button>
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}