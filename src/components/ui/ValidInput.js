import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import formStyles from '../../styles/forms';
import validate from '../../utils/validation/validateTextField';

const ValidInput = props => {
  // prop: label: string
  // prop: validationrules: object
  // prop: (optional) controlvalue: string
  // prop: Any Input prop https://material-ui.com/components/text-fields/

  const [fieldValue, updateFieldValue] = React.useState('');
  const [validity, updateValidity] = React.useState(false);
  const [showField, setShowField] = React.useState(true);

  const formClasses = formStyles()

  const inputChangeHandler = val => {
    updateFieldValue(val);
    updateValidity(
      validate(
        val,
        props.validationrules,
        checkConnectedValue,
      )
    );
  };

  const checkConnectedValue = () => {
    // Confirmation field handler
    let connectedValue = null
    if (typeof props.controlvalue !== 'undefined') {
      connectedValue = {
        ...connectedValue,
        equalTo: props.controlvalue
      };
    }
    return connectedValue;
  }

  const handleClickShowField = () => {
    setShowField(!showField);
  };

  const handleMouseDownField = event => {
    event.preventDefault();
  };

  return (
    <FormControl>
      <InputLabel htmlFor={props.label}>{props.label}</InputLabel>
      <Input
        {...props}
        id={props.label}
        value={fieldValue}
        className={formClasses.inputField}
        onChange={e => inputChangeHandler(e.target.value)}
        error={!validity}

        // Password field handling:
        type={showField ? 'text' : 'password'}
        endAdornment={
          (props.label === 'password') ?
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowField}
                onMouseDown={handleMouseDownField}
              >
                {showField ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
            : null
        }
      />
    </FormControl>
  )
}

export default React.memo(ValidInput);