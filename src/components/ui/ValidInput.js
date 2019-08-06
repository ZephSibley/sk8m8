import React from 'react';
import TextField from '@material-ui/core/TextField';

import validate from '../../utility/validation';

ValidInput = props => {
    // prop: validationRules: object
    // prop: (optional) equalityControlValue: string
    // prop: Any TextField prop https://material-ui.com/components/text-fields/

    const [values, setValues] = React.useState({
        value: '',
        valid: false,
        validationRules: props.validationRules
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

        setValues({
            ...values,
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
                !this.props.valid ?
                '#B00020' : 'black'
            }
            {...props}
        />
    )
}

export default ValidInput;