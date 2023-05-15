import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetToursByCategoryQuery } from '../../Features/categoryApi/categoryApi';
import CategoryWiseTourCard from '../Cards/CategoryWiseTourCard/CategoryWiseTourCard';

const CategoryWiseTour = () => {

    const { category } = useParams();

    const { data } = useGetToursByCategoryQuery(category);

    return (
        <div>
            {
                data?.map((tour) => (
                    <div
                        key={tour._id}
                        className=''>
                        <CategoryWiseTourCard tour={tour} />
                    </div>
                ))
            }
        </div>
    );
};

export default CategoryWiseTour;