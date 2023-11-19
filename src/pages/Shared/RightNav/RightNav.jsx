import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightNav = () => {
    return (
        <div>
            <div className='mb-6'>
            <h2 className="text-2xl font-semibold mb-4">Login With</h2>
            <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
            <button className="btn btn-outline w-full mt-3">
                <FaGithub></FaGithub>
                Login with Github
            </button>
            </div>
            <div className=' mb-6'>
            <h2 className="text-2xl font-semibold mb-4">Find Us On</h2>
            <a href="" className='flex items-center text-lg border p-3 rounded-t-lg'>
                <FaFacebook className='mr-2'></FaFacebook>
                Facebook
            </a>
            <a href="" className='flex items-center text-lg border p-3 rounded-x-lg'>
                <FaTwitter className='mr-2'></FaTwitter>
                Twitter
            </a>
            <a href="" className='flex items-center text-lg border p-3 rounded-b-lg'>
                <FaInstagram className='mr-2'></FaInstagram>
                Instagram
            </a>
            </div>
            <div className='mb-6'>
            <h2 className="text-2xl font-semibold mb-4">Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;