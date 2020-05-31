import { makeStyles } from '@material-ui/core/styles';

const formStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 225,
        padding: 20,
    },
    inlineForm: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textFieldForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right'
    },
    inputField: {
        margin: theme.spacing(2),
        width: 225,
    },
    submit: {
        margin: theme.spacing(2),
    },
    inlineFormSubmit:{
        marginTop: 'auto',
        maxHeight: 35
    },
    pullRight: {
        marginLeft: 'auto',
    },
    standardSpacing: {
        margin: theme.spacing(2)
    },
    embeddedFormHeader: {
        backgroundColor: '#30363a',
        color: 'white',
        width: '100%',
        height: 'auto',
        marginTop: 0,
        marginBottom: 0,
        letterSpacing: 1,
        padding: 10,
    },
    minimalSpacing: {
        margin: theme.spacing(1)
    },
}));

export default formStyles