import { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import styled from 'styled-components';
//
// const FormControl = styled.div`
//   margin: 0.5rem 0;
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => props.invalid ? 'red' : 'black'};
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => props.invalid ? 'red' : '#ccc'};
//     background: ${(props) => props.invalid ? '#ffd7d7' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
//
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//
//   &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }
//
//   &.invalid label {
//     color: red;
//   }
//
// `;

const CourseInput = (props) => {

  const initialState = {
    enteredValue: '',
    isValid: true,
  }

  const [state, setState] = useState(initialState)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setState((prevState) => ({ ...prevState, isValid: true }));
    }
    setState((prevState) => ({ ...prevState, enteredValue: event.target.value }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!state.enteredValue.trim().length) {
      setState((prevState) => ({ ...prevState, isValid: false }))
      return;
    }
    props.onAddGoal(state.enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!state.isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
