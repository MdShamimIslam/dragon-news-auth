import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


const LeftNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h3 className='text-2xl font-semibold'>All Categories</h3>
            <div className='space-y-3 mt-4'>
                {
                    categories.map(category => <NavLink
                        className='ml-4 text-lg block'
                        key={category.id}
                        to={`/category/${category.id}`} 
                        >
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNav;