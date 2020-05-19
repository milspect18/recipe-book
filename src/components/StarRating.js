import React from "react";

const StarRating = ({ className, count, minimize }) => {
    const star = "❤️";
    const numStars = Math.min(Math.max(0, count), 5);

    return (
        <div className={className} >
            {
                minimize ? (
                    <p style={{ whiteSpace: "nowrap", overflow: "hidden" }} >{`${numStars}${star}`}</p>
                ) : (
                        [...Array(numStars).keys()].map((_, idx) => <p key={idx}>{star}</p>)
                    )
            }
        </div >
    );
};

export default StarRating;
