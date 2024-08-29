import mergeClassNames from '@/app/utils/mergeClassNames';
import React from 'react';

function StarRating({ rating }: { rating: number }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<span key={i} className={mergeClassNames("text-xl text-gray-200", i <= rating ? 'text-l_gold' : '')}>★</span>);
    }
    return <div className="flex gap-1 items-center justify-center">{stars}</div>;
};

export default StarRating;