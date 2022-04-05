import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div>
            <nav className='md:flex justify-center font-bold text-xl m-10'>
                <CustomLink to="/home">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
            </nav>

        </div>


    );
};

export default Header;