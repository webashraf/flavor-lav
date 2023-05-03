import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../CheifBanner/ChefBanner';
import DetailsInfo from '../DetailsInfo/DetailsInfo';

const Details = () => {
    const chef = useLoaderData();
    // console.log("Chef is" ,chef);
    return (
        <div className='w-full'>
            {/* <h1 className='text-7xl text-black'>Chef Details</h1> */}
            <ChefBanner chef={chef}></ChefBanner>
            <DetailsInfo chef={chef}></DetailsInfo>
        </div>
    );
};

export default Details;