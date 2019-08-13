import { makeStyles } from '@material-ui/core/styles';

const formStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 225,
    },
    inputField: {
        margin: theme.spacing(2),
        width: 225,
    },
    submit: {
        margin: theme.spacing(2),
    }
}));

export default formStyles