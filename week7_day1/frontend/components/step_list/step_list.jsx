import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

export const StepList = (props) => (
  <div>
    <ul>
      {
        props.steps.map((step) => (<StepListItemContainer
                                    key={step.id}
                                    step={step}
                                    receiveStep={props.receiveStep}
                                    removeStep={props.removeStep}
                                    />
        ))
      }
    </ul>
    <StepForm todo_id={ props.todo_id } receiveStep={props.receiveStep}/>
  </div>
);
