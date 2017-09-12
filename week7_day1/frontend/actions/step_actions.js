export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

const receiveSteps = function receiveSteps(steps) {
  return {
    type: RECEIVE_STEPS,
    steps: steps
  };
};

const receiveStep = function receiveStep(step) {
  return {
    type: RECEIVE_STEP,
    step: step
  };
};

const removeStep = function removeStep(step) {
  return {
    type: REMOVE_STEP,
    step: step
  };
};

export {receiveSteps, receiveStep, removeStep};
