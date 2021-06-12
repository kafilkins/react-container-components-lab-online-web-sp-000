import React from 'react';

const MovieReview = ({
    headline,
    summary
}) => {
    return (
        <div key={headline}
        className = "review">
            <p>{summary}</p>
        </div>
    );
};

const MovieReviews = ({ reviews }) => <div className = "review-list"> {reviews.map(MovieReview)}</div>;

MovieReviews.defaultProps = { reviews: [] };

export default MovieReviews
