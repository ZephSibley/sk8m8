import React, { useEffect, useState, } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import yellow from '@material-ui/core/colors/yellow';


const MarkerStars = ({
    requests,
    markerId,
    starCount,
    hasStarred
}) => {
    const [starred, setStarred] = useState(hasStarred);

    useEffect(() => {
        setStarred(hasStarred)
    }, [hasStarred]);

    const starMarker = e => {
        e.preventDefault()
        requests.post(
            `${process.env.REACT_APP_ENDPOINT}mapmarker/starmarker?markerId=${markerId}`,
            null,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        ).then(r => setStarred(true))
        .catch()
    }

    const unstarMarker = e => {
        e.preventDefault()
        requests.delete(
            `${process.env.REACT_APP_ENDPOINT}mapmarker/unstarmarker?markerId=${markerId}`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        ).then(r => setStarred(false))
        .catch()
    }

    return (
        <span>
            {starred ?
                <StarIcon style={{ color: yellow[500] }} onClick={unstarMarker} /> :
                <StarBorderIcon style={{ color: yellow[500] }} onClick={starMarker} />
            }
            {starCount}
        </span>
    )
}

export default MarkerStars;