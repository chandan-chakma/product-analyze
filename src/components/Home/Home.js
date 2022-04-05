import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFakeDb from '../../hooks/useFakeDb';
import rog from '../../image/rog.jpg'
import Reviews from '../Reviews/Reviews';



const Home = () => {
    const [reviews, setReviews] = useFakeDb();

    const navigate = useNavigate();
    const showAllREviews = () => {
        const path = `../Reviews`
        navigate(path);
    }
    return (
        <div>
            <div className='md:flex justify-between items-center m-16'>
                <div>
                    <h1 className='text-3xl font-bold mb-4'>ROG-Zephyrus <span className='text-blue-700'>Duo SE-15</span> </h1>
                    <p className='font-medium'>With its innovative ROG ScreenPad Plus secondary display, the Zephyrus Duo 15 SE takes Windows 10 gaming to new dimensions. Elevate your entire experience with premium audio delivered by quad speakers and immersive Dolby Atmos surround sound.</p>
                    <button className='text-xl m-5 py-3 px-4 bg-cyan-100 rounded-xl hover:bg-slate-300 text-black-300 font-semibold'>Live Demo</button>
                </div>
                <div>
                    <img className='w-50' src={rog} alt="" srcset="" />
                </div>

            </div>



            <div className='m-5'>

                <h2 className='text-2xl text-center text-blue-500 font-bold m-5'>Customer Reviews</h2>
                <Reviews></Reviews>

                <div className='text-center '>
                    <button onClick={showAllREviews} className='text-xl font-bold bg-blue-500 rounded p-2 px-4'>See All Reviews</button>
                </div>

            </div>

        </div>


    );

};

export default Home;