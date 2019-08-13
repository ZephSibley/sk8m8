import { createMuiTheme } from '@material-ui/core/styles';
import black from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const standard = createMuiTheme({
  palette: {
    primary: black,
    secondary: green,
  },
  //spacing: factor => `${0.25 * factor}rem`,
});


export default standard