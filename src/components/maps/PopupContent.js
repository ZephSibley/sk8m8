import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import spinner from '../../assets/img/ajax-loader.gif';


const PopupContent = props => {
    // prop: markerId; int
    // prop: requests; http client

    const useStyles = makeStyles(theme => ({
        card: {
            display: 'flex',
            minWidth: 301
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }));

    const classes = useStyles();
    const theme = useTheme();

    const [markerDetails, updateMarkerDetails] = useState({
        name: 'Loading',
        locationType: '',
        creator: <img style={{minWidth: 301}} src={spinner} alt='loading' />,
    })

    useEffect(() => {
        props.requests.get(`
            ${process.env.REACT_APP_ENDPOINT}
            /mapmarker/details?id=
            ${props.markerId}
        `).then(data => 
            updateMarkerDetails(data)
        ).catch(e =>
            updateMarkerDetails(m =>  m.name = e.message)    
        );
    }, [props.requests, props.markerId]);

    return (
        <div className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {markerDetails.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {markerDetails.locationType}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {`Created by ${markerDetails.creator}`}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={spinner}
                title="video"
            />
        </div>
    );
}

export default PopupContent;