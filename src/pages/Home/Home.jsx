import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className='md:col-span-2'>
                    {
                        news.map(singleNews => <NewsCard
                            key={singleNews._id}
                            singleNews={singleNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;