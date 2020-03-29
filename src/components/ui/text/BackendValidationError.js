import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';

const BackendValidationError = ({ resp }) => {
    
    return (
        <FormHelperText
            component={'span'}
            error={true}
        >
            {resp}
        </FormHelperText>
    )
}

export default BackendValidationError;