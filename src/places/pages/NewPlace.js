import React from 'react';

import './PlaceForm.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hooks'

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      }, 
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
  },
   false
  )

  const placeSubmitHanler = event => {
    event.preventDefault();
    console.log(formState.inputs)
  };
  // the aim here is to pass input description and validity down to the input component
  // onInput gets the change from input component, 
  // with the properties gotten from there manages the state that will be sent to the server 
  // it is dispatched through the inputHandler with the help of the useCallback to avoid unnecessary rerendering
  // The useReducer is used to manage the state in this Newplace, if all is valid, takes the properties
  // onSubmit, the placeSubmitHandler will then push it to the backend

  return (
    <form className='place-form' onSubmit={placeSubmitHanler}> 
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={inputHandler}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description(at least 5 characters).'
        onInput={inputHandler}
      />
       <Input
        id='address'
        element='input'
        type='text'
        label='Address'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid address.'
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
