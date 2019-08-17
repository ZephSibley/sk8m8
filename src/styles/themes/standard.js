import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';


const standard = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  //spacing: factor => `${0.25 * factor}rem`,
});


export default standard