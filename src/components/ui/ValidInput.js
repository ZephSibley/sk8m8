import React from 'react';
import TextField from '@material-ui/core/TextField';

import validate from '../../utility/validation';

ValidInput = props => {
    // prop: validationRules: object
    // prop: (optional) equalityControlValue: string
    // prop: Any TextField prop https://material-ui.com/components/text-fields/

    const [state, setState] = React.useState({
        value: '',
        valid: false,
      });

    inputChangeHandler = val => {
        let connectedValue = {};
        // Confirmation field handler
        if (typeof props.equalityControlValue !== 'undefined') {
            connectedValue = {
              ...connectedValue,
              equalTo: equalityControlValue
            };
          }
        setState({
            ...state,
            value: val,
            valid: validate(
                value, 
                props.validationRules,
                connectedValue,
            )
        });
      };

    return(
        <TextField 
            onChangeText={val => this.inputChangeHandler(val)}
            textColor={
                state.valid ?
                'black' : '#B00020'
            }
            {...props}
        />
    )
}

export default React.memo(ValidInput);