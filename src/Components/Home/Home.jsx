import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const chefData = useLoaderData();
    console.log(chefData);


    return (
        <div>
            <Banner className={""}></Banner>
            <div className=' px-20'>
            <div className='w-1/3 border-b-4 border-lime-400 mx-auto rounded-b-2xl py-4 my-28 '>
                <h1 className='text-5xl text-center uppercase font-bold'>Our Chef</h1>
                </div>
            <div className="grid grid-cols-3 gap-8">
            {
                chefData.map(chef=> <Chef key={chef.id} chefs={chef}></Chef>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;