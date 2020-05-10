import React, { useState, } from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const MarkerStars = ({
    requests,
    markerId,
    starCount,
    hasStarred
}) => {
    const [starred, setStarred] = useState(hasStarred);

    const starMarker = e => {
        e.preventDefault()
        requests.post(
            `${process.env.REACT_APP_ENDPOINT}mapmarker/starmarker?markerId=${markerId}`,
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
            {starCount}
            {starred ?
                <StarIcon onClick={unstarMarker} /> :
                <StarBorderIcon onClick={starMarker} />
            }
        </span>
    )
}

export default MarkerStars;