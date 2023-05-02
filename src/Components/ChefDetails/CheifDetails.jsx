import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../CheifBanner/ChefBanner';

const CheifDetails = () => {
    const chef = useLoaderData();
    // console.log("Chef is" ,chef);
    return (
        <div>
            {/* <h1 className='text-7xl text-black'>Chef Details</h1> */}
            <ChefBanner chef={chef}></ChefBanner>
            
        </div>
    );
};

export default CheifDetails;