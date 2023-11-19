import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import RightNav from '../Shared/RightNav/RightNav';

const News = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4 mt-6'>
                <div className='col-span-3'>
                <h3>news details</h3>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
           
        </div>
    );
};

export default News;