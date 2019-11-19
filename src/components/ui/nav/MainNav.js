import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const MainNav = () => {

    const useStyles = makeStyles({
        root: {
            width: '100vw',
            position: 'absolute',
            bottom: 0
        },
    });

    const [value, setValue] = React.useState(0);

    const classes = useStyles();
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Trickspot" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="People" icon={<PeopleIcon />} />
        </BottomNavigation>
    );
}

export default MainNav